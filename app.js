<script>
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/8122b2a699f049d69d5f483ec7696d3c"));

function signPayment(recipient, amount, nonce, contractAddress, callback) {
  var hash = "0x" + ethereumjs.ABI.soliditySHA3(
    ["address", "uint256", "uint256", "address"],
    [recipient, amount, nonce, contractAddress]
  ).toString("hex");

  web3.personal.sign(hash, web3.eth.defaultAccount, callback);
}
</script>