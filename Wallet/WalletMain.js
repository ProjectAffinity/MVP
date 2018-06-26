
const Web3 = require("web3");
const web3 = new Web3();
const eth-LightWallet = require('eth-lightwallet');
const Transaction = require('ethereumjs-tx');

function setWeb3Provider(keystore) {
   var web3Provider = new HookedWeb3Provider({host: "https://rinkeby.infura.io/",transaction_signer: keystore});
   web3.setProvider(web3Provider);
}

var seed = lightwallet.keyStore.generateRandomSeed();
const accountPassword; //Prompt user for password;
lightwallet.keyStore.deriveKeyFromPassword(accountPassword, function(err, pwDerivedKey){
    if(err) throw err;
    var ks = lightwallet.keyStore(seed,pwDerivedKey);
    var addresses = ks.generateNewAddress(pwDerivedKey,5);
    var accounts = addresses.getAddresses();
    web3.eth.defaultAccount = add0x(this.accounts[0]);
  });

function add0x (input) {
    if (typeof(input) !== 'string') {
        return input;
    }
    else if (input.length < 2 || input.slice(0,2) !== '0x') {
        return '0x' + input;
    }
    else {
        return input;
    }
}
