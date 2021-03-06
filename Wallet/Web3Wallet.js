
var web3 = new Web3();

function setWeb3Provider(keystore) {
   var web3Provider = new HookedWeb3Provider({host: "https://rinkeby.infura.io/",transaction_signer: keystore});
   web3.setProvider(web3Provider);
}

var keystore;

function userPassword(Password){
  var password = document.getElementById('Password').value;
  document.getElementById("userPassword").innerHTML = password;
}

keyStore.createVault({password: password,seedPhrase: seedPhrase,hdPathString: hdPath}, function (err, ks) {

  var seed = keystore.generateRandomSeed(seedPhrase);

  if () returns bool{
  keystore.isSeedValid(seed)
  }
  // Some methods will require providing the `pwDerivedKey`,
  // Allowing you to only decrypt private keys on an as-needed basis.
  // You can generate that value with this convenient method:
  ks.keyFromPassword(password, function (err, pwDerivedKey) {
    if (err) throw err;

    // generate five new address/private key pairs
    // the corresponding private keys are also encrypted
    ks.generateNewAddress(pwDerivedKey, 5);
    var addr = ks.getAddresses();

    ks.passwordProvider = function (callback) {
      var pw = prompt("Please enter password", "Password");
      callback(null, pw);
    };

    // Now set ks as transaction_signer in the hooked web3 provider
    // and you can start using web3 using the keys/addresses in ks!
  });
});

function newAddresses(password) {

        if (password == '') {
          password = prompt('Enter password to retrieve addresses', 'Password');
        }
        var numAddr = parseInt(document.getElementById('numAddr').value)
        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {
        global_keystore.generateNewAddress(pwDerivedKey, numAddr);
        var addresses = global_keystore.getAddresses();
        document.getElementById('sendFrom').innerHTML = ''
        document.getElementById('functionCaller').innerHTML = ''
        for (var i=0; i<addresses.length; ++i) {
          document.getElementById('sendFrom').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
          document.getElementById('functionCaller').innerHTML += '<option value="' + addresses[i] + '">' + addresses[i] + '</option>'
        }
        getBalances();
      })
      }

function getBalances() {

        var addresses = global_keystore.getAddresses();
        document.getElementById('addr').innerHTML = 'Retrieving addresses...'
        async.map(addresses, web3.eth.getBalance, function(err, balances) {
          async.map(addresses, web3.eth.getTransactionCount, function(err, nonces) {
            document.getElementById('addr').innerHTML = ''
            for (var i=0; i<addresses.length; ++i) {
              document.getElementById('addr').innerHTML += '<div>' + addresses[i] + ' (Bal: ' + (balances[i] / 1.0e18) + ' ETH, Nonce: ' + nonces[i] + ')' + '</div>'
            }
          })
        })
      }

function setSeed() {
        var password = prompt('Enter Password to encrypt your seed', 'Password');
      lightwallet.keystore.createVault({
        password: password,
        seedPhrase: document.getElementById('seed').value,
        //random salt
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {
        global_keystore = ks
        document.getElementById('seed').value = ''

        newAddresses(password);
        setWeb3Provider(global_keystore);

        getBalances();
        })
      }

function newWallet() {
        var extraEntropy = document.getElementById('userEntropy').value;
        document.getElementById('userEntropy').value = '';
        var randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy);
        var infoString = 'Your new wallet seed is: "' + randomSeed +
          '". Please write it down on paper or in a password manager, you will need it to access your wallet. Do not let anyone see this seed or they can take your Ether. ' +
          'Please enter a password to encrypt your seed while in the browser.'
        var password = prompt(infoString, 'Password');
      lightwallet.keystore.createVault({
        password: password,
        seedPhrase: randomSeed,
        //random salt
        hdPathString: "m/0'/0'/0'"
      }, function (err, ks) {
        global_keystore = ks

        newAddresses(password);
        setWeb3Provider(global_keystore);
        getBalances();
        })
      }

function showSeed() {
        var password = prompt('Enter password to show your seed. Do not let anyone else see your seed.', 'Password');
        global_keystore.keyFromPassword(password, function(err, pwDerivedKey) {
        var seed = global_keystore.getSeed(pwDerivedKey);
        alert('Your seed is: "' + seed + '". Please write it down.');
        });
}

function sendEth() {
        var fromAddr = document.getElementById('sendFrom').value
        var toAddr = document.getElementById('sendTo').value
        var valueEth = document.getElementById('sendValueAmount').value
        var value = parseFloat(valueEth)*1.0e18
        var gasPrice = 18000000000
        var gas = 50000
        web3.eth.sendTransaction({from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas}, function (err, txhash) {
          console.log('error: ' + err)
          console.log('txhash: ' + txhash)
        })
}

function functionCall() {
        var fromAddr = document.getElementById('functionCaller').value
        var contractAddr = document.getElementById('contractAddr').value
        var abi = JSON.parse(document.getElementById('contractAbi').value)
        var contract = web3.eth.contract(abi).at(contractAddr)
        var functionName = document.getElementById('functionName').value
        var args = JSON.parse('[' + document.getElementById('functionArgs').value + ']')
        var valueEth = document.getElementById('sendValueAmount').value
        var value = parseFloat(valueEth)*1.0e18
        var gasPrice = 50000000000
        var gas = 4541592
        args.push({from: fromAddr, value: value, gasPrice: gasPrice, gas: gas})
        var callback = function(err, txhash) {
          console.log('error: ' + err)
          console.log('txhash: ' + txhash)
        }
        args.push(callback)
        contract[functionName].apply(this, args)
}
