const hdkey = require('ethereumjs-wallet/hdkey');
const bip39 = require('bip39');
const Web3 = require('web3');
const Wallet = require('ethereumjs-wallet');
const EthUtil = require('ethereumjs-util');


const mnemonic = bip39.generateMnemonic(); //This generates a mnemonic seed
const seed = bip39.mnemonicToSeed(mnemonic); //This creates a seed buffer
const root = hdkey.fromMasterSeed(seed);
const masterPrivateKey = root.privateKey.toString('Hex');// This creates the master private key
const addrNode = root.derive("m/44'/60'/0'/0/0");
const address = addrNode.getWallet().getChecksumAddressString();
