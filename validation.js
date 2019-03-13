//npm install ethereumjs-abi

const Web3 = require('web3');
var ABI = require('ethereumjs-abi');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/8122b2a699f049d69d5f483ec7696d3c"));

	
	
    function signPayment() {
        var recipient = document.forms["form8"]["Recipient"].value;
        var amount = document.forms["form8"]["Amount"].value;
        var nonce = document.forms["form8"]["Nonce"].value;
        var contractAddress = document.forms["form8"]["ContractAddress"].value;

     

       var hash = "0x" + ethereumjs.ABI.soliditySHA3(
       ["address", "uint256", "uint256", "address"],
       [recipient, amount, nonce, contractAddress]
       ).toString("hex");


       web3.personal.sign(hash, web3.eth.defaultAccount, function (err, result) {
       console.log(err, result)
     
       alert(result);
       });
    

}


	
