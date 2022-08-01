import { ethers } from "hardhat";
import assert from 'node:assert/strict';

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Recovery address
    let address_a = "0x4Be69E87E38139b204ac0dEF0eA79c6B04aEf818";
    // Lost SimpleToken address created by the instance
    let address_b = "0xA47c20Afd6f6314C0265906c4720bf2B4f4477e7"

    let signer = await ethers.getSigner(player);
    let contract_b = await ethers.getContractAt("SimpleToken", address_b, signer);

    // find address from etherscan or calculate lost address
    console.log(await contract_b.destroy(player));

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
