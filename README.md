# Ethernaut challenges

Scripts are tested on contracts deployed on local Ethereum network with Hardhat.

Stage 9 is tested on rinkeby network as King's challenge cannot be tested locally.  
Stage 10 is similarly tested on rinkby network. Pretty annoying stage due to not realising reason for transaction reverting as we have to manually handle gas fees required by the recursive call  
Stage 11 tested on rinkeby network. On first glance, it was hard to grasp what the problem was as Building interface used in the contract had no implementation, which ultimately was the key to the exploit.  
Stage 12 tested on rinkeby network. Pretty easy stage with some understanding of EVM storage.  
Stage 13 is tricky, especially the part on bit notations. understanding of hexa representation of numbers is required.
Stage 14 ext function is a low level call.

Contract address in scripts are the specific address instance deployed during testing. Deploy your own instance to test if needed.

Player address is a random address taken from one of the 20 accounts provided in local network
