# Ethernaut challenges

Scripts are tested on contracts deployed on local Ethereum network with Hardhat.

Stage 9 is tested on rinkeby network as King's challenge cannot be tested locally.  
Stage 10 is similarly tested on rinkby network. Pretty annoying stage due to not realising reason for transaction reverting as we have to manually handle gas fees required by the recursive call  
Stage 11 tested on rinkeby network. On first glance, it was hard to grasp what the problem was as Building interface used in the contract had no implementation, which ultimately was the key to the exploit.  
Stage 12 tested on rinkeby network. Pretty easy stage with some understanding of EVM storage.  
Stage 13 is tricky, especially the part on bit notations. Understanding of hexa representation of numbers is required.
Stage 14 ext function is a low level call. extcodesize of EOA account will be 0, but >0 for contracts. If we try to check contract size in the constructor function though, it will be 0 as constructor function is part of the creation code and not the runtime code. read https://blog.openzeppelin.com/deconstructing-a-solidity-contract-part-ii-creation-vs-runtime-6b9d60ecb44c/ for more details. Gate three is simple as long as we know the fact a ^ a = 0 and uint(64)-1 in 2 complements is the same as uint64.max.
Stage 15 is interesting. Had no idea how to bypass timelock inititally. Was able to figure out after reading the clue on "contract is lacking certain implementations of ERC20 contract".

Contract address in scripts are the specific address instance deployed during testing. Deploy your own instance to test if needed.

Player address is a random address taken from one of the 20 accounts provided in local network
