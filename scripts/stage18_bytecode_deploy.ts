import { ethers } from "hardhat";

async function main() {

 let player = "0x87955711F08521Eb054f9354371eC38713f236ee"    
 let signer = await ethers.getSigner(player);
 let tx = await signer.sendTransaction({data: "0x600a600d600039600a6000f300602a60105260206010f3"});
 await tx.wait();
 let receipt = (await ethers.provider.getTransactionReceipt(tx.hash));
 console.log(receipt);

 // We recommend this pattern to be able to use async/await everywhere
 // and properly handle errors.
main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
});
