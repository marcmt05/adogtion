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

            function traerDatos() {
                const xhttp = new XMLHttpRequest();
    
     
    
                xhttp.open('GET', "https://ipfs.io/ipfs/QmeZc9ayhXSV9hSucjf19qm4wvy6p1dKjk3BZXTKQwu7T8/6.json", true);
    
                xhttp.send();
    
                const urlIMG = "https://ipfs.io/ipfs/QmPdYtJk7NA9JoJLszJNeGq9N82THuCXFRQGkXSmHxmxs7/";

                xhttp.onreadystatechange = function() {
                    if(this.readyState == 4 && this.status == 200) {
                        //console.log(this.responseText);
                        let datos = JSON.parse(this.responseText);
                        console.log(datos);
                        let mainIMG = document.querySelector('#mainIMG');
                        mainIMG.innerHTML = '';
                        let nombrePerro = document.querySelector("#divPerro");
                        nombrePerro.innerHTML = '';
                        
                for(let item of datos) {
                    
                mainIMG.innerHTML += `
                <div id="imagenGrande"><img src="${item.imagen}"></div>
                <div id="info">
                    <ul>
                        <li><b>ID:</b> #1006</li>
                        <li><b>Edad:</b> ${item.edad}</li>
                        <li><b>Raza:</b> ${item.raza}</li>
                        <li><b>Genero:</b> ${item.genero}</li>
                        <li><b>Fecha de entrada:</b> ${item.fechaEntrada}</li><br>
                        <li id="description"><b>Descripci??n:</b> Rambo es un perro que lleg?? a manos de sus propietarios que ya no se pod??an hacer cargo de ??l. Es un perro especial porque no le acaban de gustar las caricias. No sabemos si tiene alg??n trauma de su pasado, pero por ahora no se siente demasiado a gusto con la manipulaci??n. A base de paciencia y educaci??n puede llegar a mejorar, pero necesita una familia que entienda su situaci??n y le respete ese espacio y tiempo extra que necesita.

                        Los perros que tienen alg??n trauma necesitan una dosis extra de paciencia y conocimientos de los propietarios, pero tienen tanto que dar como otros perros que son m??s f??ciles en la adaptaci??n. ??Quieres ayudar a Rambo a volver a confiar en las personas?</li>
                    </ul>
                    <a href="http://127.0.0.5/adogtion/frontend/src/paginas/adopcion/adopcion.html"><button id="botonAdoptar">Adoptar ahora</button></a>
                </div>
                <div id="galeria">
                    <img src="${urlIMG+item.nombre +"/" + item.nombre + "1.png"}">
                    <img src="${urlIMG+item.nombre +"/" + item.nombre + "2.png"}">
                    <img src="${urlIMG+item.nombre +"/" + item.nombre + "3.png"}">
                    <img src="${urlIMG+item.nombre +"/" + item.nombre + "4.png"}">
                </div>
            
                    `;
                nombrePerro.innerHTML += `
                    <h3 id="nombrePerro">${item.nombre}</h3>
                `
                }
                
                
            }  
        }
    }