//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Donaciones {
    address public owner;
    address public ultimoDonante;
    address[] private donantes;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable  {}

    function donar() public payable {
        require(msg.value > 0, "Introduce un importe superior a 0");
        ultimoDonante = msg.sender;
        donantes.push(ultimoDonante);
    }

    function obtenerDireccion() public view returns(address) {
        return address(this);
    }

    function verFondos() public view returns(uint256) {
        return address(this).balance;
    }

    function totalDonantes() public view returns(uint256) {
        return donantes.length;
    }
}
