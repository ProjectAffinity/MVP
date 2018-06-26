const { generateMnemonic, EthHdWallet } = require('eth-hd-wallet')

const wallet = EthHdWallet.fromMnemonic(generateMnemonic())

console.log( wallet instanceof EthHdWallet );
console.log( wallet.generateAddresses(2) )

const rawTx = wallet.sign({
  from: '0x...',
  to: '0x...',
  value: 200000000000000000,
  nonce: 0x0,
  gasPrice: 50000000000,
  gasLimit: 21000,
  chainId: 1 
})

console.log( rawTx )

web3.eth.sendRawTransaction(rawTx, (err) => { ... })
