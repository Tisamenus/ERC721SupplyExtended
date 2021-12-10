// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

contract Test {
  event log(string indexed message);

  function helloWorld() external {
    emit log("hello world");
  }
}
