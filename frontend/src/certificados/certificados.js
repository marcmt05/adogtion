
/*
for(let i = 0; i <= 8; i++) {
    const contract = new web3.eth.Contract(abi, "0xEdcBe482759f1a84ba73A555Aa4bF2F4f23E506f");
    const adopter = await contract.methods.getAdopters(i).call().then()
    if(adopter == accounts[0]) {
        console.log("Hurrah!")
    } else {
        console.log("Not hurrah!")
    }
}*/

//ABI CONTRATO INTELIGENTE

let abi = 
[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "transferNFT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "adopter",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "adopters",
		"outputs": [
			{
				"internalType": "address",
				"name": "adoptersAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idPerro",
				"type": "uint256"
			}
		],
		"name": "directorio",
		"outputs": [
			{
				"internalType": "string",
				"name": "directorioBase",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getAdopters",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
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
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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

const certificados = document.querySelector("#certificados");
const directorio = document.querySelector("#directorio");
const adoptante = document.querySelector("#adoptante");

//certificados.addEventListener("click", async() => {
async function directorios() {
	try {
    let contract = new web3.eth.Contract(abi, "0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0");
    let accounts1 = await web3.eth.getAccounts();
	
    let beta = await contract.methods.getAdopters(0).call().then();
	let notorius = await contract.methods.getAdopters(1).call().then();
    let cooper = await contract.methods.getAdopters(2).call().then();
    let diesel = await contract.methods.getAdopters(3).call().then();
    let oyster = await contract.methods.getAdopters(4).call().then();
    let rambo = await contract.methods.getAdopters(5).call().then();
    let rufus = await contract.methods.getAdopters(6).call().then();
    let tyson = await contract.methods.getAdopters(7).call().then();
	
    if (beta == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(1).call().then();
		directorio.innerHTML = "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=1'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=1</a></li><br/><hr/>";
    } 
	
	if (notorius == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(2).call().then();
		directorio.innerHTML += "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=2'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=2</a></li><br/><hr/>";
	} 
	
	if (cooper == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(3).call().then();
		directorio.innerHTML += "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=3'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=3</a></li><br/><hr/>";
	} 
	
	if (diesel == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(4).call().then();
		directorio.innerHTML += "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=4'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=4</a></li><br/><hr/>";
	} 

	if (oyster == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(5).call().then();
		directorio.innerHTML += "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=5'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=5</a></li><br/><hr/>";
	} 
	if (rambo == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(6).call().then();
		directorio.innerHTML += "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=6'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=6</a></li><br/><hr/>";
	} 
	if (rufus == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(7).call().then();
		directorio.innerHTML += "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=7'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=7</a></li><br/><hr/>";
	}
	if (tyson == accounts1[0]) {
		let infoDirectorio = await contract.methods.directorio(8).call().then();
		directorio.innerHTML += "<li><b>Acceso a directorio: </b><a href="+infoDirectorio+">"+infoDirectorio+"</a></li><br/><li><b>Ver movimientos: </b><a href='https://goerli.etherscan.io/token/0x0cbdefdeebf2fa837d12fda78243240f6e9ca094?a=8'>0x05322A9bB0df8AAd5bA32CB213599023Eb566AC0?a=8</a></li><br/><hr/>";
	}
	} catch {
		alert("Conecta Metamask")
	}
}

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
			directorios();
        })

        directorios();
		} // Legacy dapp browsers...
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