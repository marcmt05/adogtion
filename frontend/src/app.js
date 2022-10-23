const metamaskButton = document.querySelector('#connect-button');
const walletInfo = document.querySelector('#wallet-info');
const metamaskInfo = document.querySelector('#metamask-info');
const buttonpaypal = document.querySelector("#paypal");

metamaskButton.addEventListener("click", async() => {
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


async function traerDatos() {

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', "https://ipfs.io/ipfs/QmRmhTqig6daD7ZmdxPJJpFuZkFgM5HvrxBMJ13Dxcdo1z", true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let cajas = document.querySelector('#cajas');
            cajas.innerHTML = '';
            
        
    for(let item of datos) {
        cajas.innerHTML += `
            <div class="cajaIMG"> 
                <a href="./paginas/perros/${item.nombre}/${item.nombre}.html">
                    <img class="imagenes" src="https://${item.imagen}">
                    <h4>${item.nombre}, ${item.edad}</h4>
                </a>
            </div>
        `
    }
    
    
        }  
    }
}





