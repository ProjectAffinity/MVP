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
  chainId: 1 /* see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md */
})

console.log( rawTx ) /* "0x...." */

web3.eth.sendRawTransaction(rawTx, (err) => { ... })
