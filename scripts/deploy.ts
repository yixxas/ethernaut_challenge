import { ethers } from "hardhat";

async function main() {
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E"    
    let random_address = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
    //let fac1 = await ethers.getContractFactory("Delegate");
    let fac2 = await ethers.getContractFactory("Delegation");
    //const fac_deploy1 = await fac1.deploy(player);
    const fac_deploy2 = await fac2.deploy("0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE");
    //await Fac.transfer(player,20);
    //await fac_deploy1.deployed();
    await fac_deploy2.deployed();
    //console.log(fac_deploy1.address);
    //console.log(fac_deploy2.address);
    //let signer = await ethers.getSigner(player);
    //let contract = await ethers.getContractAt("Fallback", contract_address, signer);

    //let temp = await contract.owner();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
