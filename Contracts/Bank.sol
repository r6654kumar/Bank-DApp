// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract Bank{
    int bal;
    constructor(){
     bal=1;   
    }
    function getBalance() view public returns(int)
    {
        return bal;
    }
    function withdraw(int amt)public
    {
        bal=bal-amt;
    }
    function deposit(int amt) public{
        bal=bal+amt;
    }

}