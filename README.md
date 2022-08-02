# Ethernaut challenges

Scripts are tested on contracts deployed on local Ethereum network with Hardhat.

Stage 9 is tested on rinkeby network as King's challenge cannot be tested locally.<br /> 
Stage 10 is similarly tested on rinkby network. Pretty annoying stage due to not realising reason for transaction reverting as we have to manually handle gas fees required by the recursive call<br />
Stage 11 tested on rinkeby network. On first glance, it was hard to grasp what the problem was as Building interface used in the contract had no implementation, which ultimately was the key to the exploit.<br />
Stage 12 tested on rinkeby network. Pretty easy stage with some understanding of EVM storage.<br />
Stage 13 is tricky, especially the part on bit notations. Understanding of hexa representation of numbers is required.<br />
Stage 14 ext function is a low level call. extcodesize of EOA account will be 0, but >0 for contracts. If we try to check contract size in the constructor function though, it will be 0 as constructor function is part of the creation code and not the runtime code. read https://blog.openzeppelin.com/deconstructing-a-solidity-contract-part-ii-creation-vs-runtime-6b9d60ecb44c/ for more details. Gate three is simple as long as we know the fact a ^ a = 0 and uint(64)-1 in 2 complements is the same as uint64.max.<br />
Stage 15 is interesting. Had no idea how to bypass timelock inititally. Was able to figure out after reading the clue on "contract is lacking certain implementations of ERC20 contract". Teaches us to not inherit contracts we do not understand.<br />
Stage 16, need to figure out why proxy contract is not being called correctly. UPDATE: turns out it was an out of gas error. Estimated gas limit does not do very well in exploits it seem. Actually took many hours before I figured this out.....<br />
Approach to this is not too difficult once we understand delegate call's storage slot.<br />
Stage 17 is easy. Figure out lost address by either calculating, or scan transaction history on the block.<br />
Stage 18 teaches us to write a contract using EVM OPCODE. Pretty meaningful stage.<br />
Stage 19 is the toughest stage thus far. Understanding of dynamic storage allocation in the EVM is required and the non standard implementation of keccak256 made it even more confusing.<br />
Stage 20 is a really easy stage. We simply have to force an out of gas revert on the partner call address which we can set and since the low level OPCODE call has no gas restriction set and all avaliable gas are forwarded to it (63/64 gas avaliable actually). <br />


Contract address in scripts are the specific address instance deployed during testing. Deploy your own instance to test if needed.

Player address is a random address taken from one of the 20 accounts provided in local network
