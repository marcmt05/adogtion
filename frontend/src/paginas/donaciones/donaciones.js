const metamaskButton = document.querySelector('#connect-button');
const walletInfo = document.querySelector('#wallet-info');
const metamaskInfo = document.querySelector('#metamask-info');
const buttonpaypal = document.querySelector("#paypal");

addEventListener("DOMContentLoaded", async() => {
	if (window.ethereum) {
		await window.ethereum.request({method: 'eth_requestAccounts'});
        window.web3 = new Web3(ethereum);

		let accounts = await web3.eth.getAccounts();
        let walletAddress = accounts[0];
		
        walletInfo.innerHTML ='';
        metamaskInfo.innerHTML = walletAddress;

        window.ethereum.on('accountsChanged', (accounts) => {
            walletAddress = accounts;
			metamaskInfo.innerHTML = walletAddress;
        })
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/**/});
    }
    /*Non-dapp browsers...*/
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
})


//ABI CONTRATO INTELIGENTE

let abi = 
[
	{
		"inputs": [],
		"name": "donar",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "obtenerDireccion",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDonantes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ultimoDonante",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "verFondos",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

//INTERACTUAR CON CONTRATO

	//Recibir el balance total del contrato público

const cajaBalance = document.querySelector("#cajaBalance");
const getBalance = document.querySelector("#getBalance");

getBalance.addEventListener("click", async () => {
	const contract = new web3.eth.Contract(abi, "0x315407C084e00F3c59d310f90b3C205D7bb69F4C");
	const getBalance = await contract.methods.verFondos().call().then();
	let ethBalance = web3.utils.fromWei(getBalance, 'ether');
	cajaBalance.innerHTML += "<b>Estos son los fondos que hay actualmente en el contrato: " + ethBalance + " ETH</b>";
});

	//Donación -> Enviar ethereum al contrato

const mensaje = document.querySelector("#mensaje");
const donar = document.querySelector("#donar");

donar.addEventListener("click", async() => {
	const contract = new web3.eth.Contract(abi, "0x315407C084e00F3c59d310f90b3C205D7bb69F4C");
	let cantidadDonacion = document.querySelector("#donation").value;
	if(cantidadDonacion <= 0) {
		alert("Debes introducir una cantidad superior a 0.")
	} else {
	let _cantidadDonacion = await web3.utils.toWei(cantidadDonacion, 'ether')
	const accounts = await web3.eth.getAccounts();

	contract.methods.donar().send({from: accounts[0], value: _cantidadDonacion})
	.then()
	}

	
});

/*getBalance.addEventListener("click", async () => {
	let contractAddress = "0x315407C084e00F3c59d310f90b3C205D7bb69F4C";
	const getBalance = await web3.eth.getBalance(contractAddress);
	let ethBalance = web3.utils.fromWei(getBalance, 'ether');
	cajaBalance.innerHTML += "<b>Estos son los fondos que hay actualmente en el contrato: " + ethBalance + " ETH</b>";
});*/