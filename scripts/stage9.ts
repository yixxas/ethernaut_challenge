import { ethers } from "hardhat";

async function main(){
    // this script is not needed to solve stage9. simply used to verify balances
    // to solve this, simply deploy KingHack.sol contract and gain king status with no receive function

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";
    // king contract address
    let address_a = "0x40105fEA10a782B153E709bB7BeBbB30421B9Fe8";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("King", address_a, signer);

    console.log(await contract_a.prize());
    console.log(await contract_a._king());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
