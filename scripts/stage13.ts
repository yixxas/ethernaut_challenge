import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // gatekeeper one address
    let address_a = "0xd8C5310c3AA38FE4aD98D647dafFCad303bebaad";

    // gatekeeper one hack address;
    let address_b = "0x2d4fd88FD565a9CE58E0a40491b047f1e593A78f";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("GatekeeperOne", address_a, signer);
    let contract_b = await ethers.getContractAt("GatekeeperOneHack", address_b, signer);

    let tx = await contract_b.attack();
    console.log(tx);

    console.log(await contract_a.entrant());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
