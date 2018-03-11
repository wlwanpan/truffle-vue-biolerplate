pragma solidity ^0.4.4;

contract Storage {

  address owner;

  function Storage() public {
    owner = msg.sender;
  }

}