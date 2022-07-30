import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // gatekeeper two address
    let address_a = "0x3f83748D15CcF016711aAF6ca68705CaBF8C2448";

    // gatekeeper two hack address;
   let address_b = "0x268Dfb1662c378f8Ba2973B35e7488556E2135b7";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("GatekeeperTwo", address_a, signer);
    let contract_b = await ethers.getContractAt("GatekeeperTwoHack", address_b, signer);

    let entrant = await contract_a.entrant();
    console.log(entrant);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
