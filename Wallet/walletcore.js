var hdkey = require('ethereumjs-wallet/hdkey');
var bip39 = require("bip39");
const web3 = require(“web3.js”);
var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');

var path = "m/44'/60'/0'/0/0";

const mnemonic = bip39.generateMnemonic(); //This generates a mnemonic seed
const seed = bip39.mnemonicToSeed(mnemonic); //This creates a seed buffer
const root = hdkey.fromMasterSeed(seed);
const masterPrivateKey = root.privateKey.toString('Hex');
