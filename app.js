var accounts;
var account;
var strData;

function setStatus(message) {
	var status = document.getElementById("status");
	status.innerHTML = message;
};
function setStatus1(message) {
	var status = document.getElementById("status1");
	status.innerHTML = message;
};
function setStatus3(message) {
	var status = document.getElementById("account");
	status.innerHTML = message;
};

window.addEventListener('load', async () => {
	// Modern dapp browsers...
	console.log('loaded111');
	if (window.ethereum) {
		console.log('789')
		window.web3 = new Web3(ethereum);
		try {
			await ethereum.enable();
			// var accounts = await web3.eth.getAccounts();
			// var option = { from: accounts[0] };
			// var myContract = new web3.eth.Contract(abi, contractAddress);
			// myContract.methods.RegisterInstructor('11', 'Ali')
			// 	.send(option, function (error, result) {
			// 		if (!error)
			// 			console.log(result);
			// 		else
			// 			console.log(error);
			// 	});
		} catch (error) {
			// User denied account access...
		}
	}
	// Legacy dapp browsers...
	else if (window.web3) {
		console.log('788')
		window.web3 = new Web3(web3.currentProvider);
		// Acccounts always exposed
		web3.eth.sendTransaction({/* ... */ });
	}
	// Non-dapp browsers...
	else {
		console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	}
});

// window.addEventListener('load', async () => {
// 	window.web3 = new Web3(web3.currentProvider);
// 	// Acccounts always exposed
// 	web3.eth.sendTransaction({/* ... */ });
// })



//web3 = new Web3(web3.currentProvider);



abi = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "shaValue",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "hasSHAValue",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "identifier",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "checkIdentifier",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "identifier",
				"type": "string"
			}
		],
		"name": "calculateSHA",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "identifier",
				"type": "string"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "store",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "identifier",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "storeIdentifier",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
mycontract = web3.eth.contract(abi);
//Get your deployed contract address.
contractInstance = mycontract.at('0x70b0b033a07ccb24d46f13a8ca88a4c932b5624e');




function check() {

	// web3.eth.sendTransaction({/* ... */ }, function (err, result) {
	// 	if (err) {
	// 		console.log(err);
	// 	}
	// 	else {
	// 		console.log(result);
	// 	}
	// });

	var tempAccount = document.getElementById("account1").value;


	var tempString = document.getElementById("identifier1").value;

	setStatus("Verifying. Please wait.." + tempAccount);

	//   contractInstance.checkIdentifier(tempString,tempAccount).then(function(response) {
	// 	  console.log("success!",response);

	// 	  var temp = response;


	// 	  if(temp == true)
	// 	  {
	// 	  	setStatus("Identifier verified successfully.");
	// 	  }
	// 	  else
	// 	  {
	// 	  	setStatus("Identifier not found.");
	// 	  }


	//   },function(error){
	// 	  console.log("Error!",error);
	// 	   setStatus("error"+response);
	//   }
	// );

	var result = contractInstance.checkIdentifier(tempString, tempAccount, function (err, result) {
		if (!err) {
			console.log(result);
			var temp = result;


			if (temp == true) {
				setStatus("Identifier verified successfully.");
			}
			else {
				setStatus("Identifier not found.");
			}

		}
		else {
			console.err(error);
		}
	});


};







function store() {

	setStatus("Entered the check block");

	var tempAccount = document.getElementById("account2").value;

	var tempString = document.getElementById("identifier2").value;

	setStatus("Storing. Please wait.." + tempAccount);


	//   contractInstance.store(tempString,tempAccount,{from: tempAccount}).then(function(response) {
	// 	  console.log("success!",response);
	// 	   setStatus("Successfully stored "+tempString);
	//    //check1();

	//   },function(error){
	// 	  console.log("Error!",error);
	// 	   setStatus("error"+response);
	//   }
	// );


	var result = contractInstance.store(tempString, tempAccount, function (err, result) {
		if (!err) {
			console.log(result);
			setStatus("Successfully stored " + tempString);
		}
		else {
			console.err(error);
			setStatus("error" + response);
		}
	});
};

