const bip39 = require('bip39')
const hdkey = require('ethereumjs-wallet/hdkey')
const util = require('ethereumjs-util')

const mnemonic = bip39.generateMnemonic();
console.log(mnemonic);
const seed = bip39.mnemonicToSeed(mnemonic);
console.log(seed);
var hdWallet = hdkey.fromMasterSeed(seed)
console.log(hdWallet);
var key1 = hdWallet.derivePath("m/44'/60'/0'/0/0")
console.log(key1);
var address1 = util.pubToAddress(key1._hdkey._publicKey, true)
console.log(address1);
var keys = key1.toString('Hex');
console.log(keys);
