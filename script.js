var contract;

$(document).ready(function(){
    web3 = new Web3(window.ethereum);   
    var address="0xe1D879Bc60c9cb4B92e7AB9657ae4E4f47F0685C";
    var abi=[
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "amt",
                    "type": "int256"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "int256",
                    "name": "amt",
                    "type": "int256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    contract= new web3.eth.Contract(abi,address);
    contract.methods.getBalance().call().then(function(bal){
        $('#balance').html(bal);
    })
    $('#deposit').click( async function(){
        var amt=0;
        amt=parseInt($('#amount').val());
        web3.eth.getAccounts().then(function(accounts){
            var acc = accounts[0];
            return contract.methods.deposit(amt).send({from: acc});
        }).then(function(tx){
            console.log(tx);
            contract.methods.getBalance().call().then(function(bal){
                $('#balance').html(bal);
            })
        }).catch(function(err){
            console.log(err);
        });
    })
    $('#withdraw').click( async function(){
        var amt=0;
        amt=parseInt($('#amount').val());
        web3.eth.getAccounts().then(function(accounts){
            var acc = accounts[0];
            console.log(acc);
            return contract.methods.withdraw(amt).send({from: acc});
        }).then(function(tx){
            console.log(tx);
            contract.methods.getBalance().call().then(function(bal){
                $('#balance').html(bal);
            })
        }).catch(function(err){
            console.log(err);
        });
    })
});