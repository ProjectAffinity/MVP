var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');
const eth-LightWallet = require('eth-lightwallet');
const Transaction = require('ethereumjs-tx');
const hdkey = require('ethereumjs-wallet/hdkey');
const crypto = require('crypto');
const bip39 = require('bip39');
const utils = require('ethereumjs-util');

const defaultHdPath = "m/44'/60'/0'/0/"

function setWeb3Provider(keystore) {
   var web3Provider = new HookedWeb3Provider({host: "https://rinkeby.infura.io/",transaction_signer: keystore});
   web3.setProvider(web3Provider);
}

const accountPassword; //Prompt user for password;
var seed = lightwallet.keyStore.generateRandomSeed();
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
