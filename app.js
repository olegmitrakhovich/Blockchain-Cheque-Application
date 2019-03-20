 //npm install --global --production windows-build-tools
 //npm --add-python-to-path='true' --debug install --global windows-build-tools
 //npm install web3@^0.20.0
 //npm install -g ethereumjs-abi
 //https://ethereum.stackexchange.com/questions/54883/updated-how-to-see-output-of-web3-personal-sign-in-browser-method-p
 //npm install lite-server --save-dev



const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/infura-key"));


   	function formValidation() {

	var errMessages = "";

    var recipient = document.forms["form8"]["RECIPIENT"].value;
    var amount = document.forms["form8"]["AMOUNT"].value; 
    var nonce = document.forms["form8"]["NONCE"].value;
    var contractAddress = document.forms["form8"]["CONTRACTADDRESS"].value; 

	signPayment(recipient, amount, nonce, contractAddress);

	}
                                                            
	async function signPayment(recipient, amount, nonce, contractAddress) {
         
                              
         var hash = web3.utils.soliditySha3(recipient, amount, nonce, contractAddress);
         
         alert("THIS IS YOUR MESSAGE HASH: " + hash);

         web3.eth.accounts.sign(hash, 'PRIVATE KEY');
         
         

    }

   


	
