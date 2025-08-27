// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaAmigos = [];
let nombreAmigo;
function agregarAmigo(){
    nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo != ""){
        listaAmigos.push(nombreAmigo);
        document.getElementById("amigo").value = '';mostrarNombreAmigo();
    }else{
        alert("Ingrese un nombre válido");
    }
}


function mostrarNombreAmigo(){
    crearElementosLista("listaAmigoss","li",nombreAmigo);
}

function sortearAmigo(){
    let sorteo = Math.floor(Math.random()*listaAmigos.length); 
    let mostrar = document.getElementById("resultado").value = "El amigo secreto es: " + listaAmigos[sorteo];
    
    if (listaAmigos != ""){
        crearElementosLista("resultado","li",mostrar);
        document.querySelector("img").src="assets/amigo-secreto2.png"; 

        document.getElementById("listaAmigoss").style.display = 'none';

        document.querySelector(".button-draw").disabled = true;
    }
    
}

function crearElementosLista(lista, elemento,muestra){
    let listas = document.getElementById(lista);
    let elementoLista = document.createElement(elemento);
    elementoLista.textContent = muestra;
    listas.appendChild(elementoLista);
}
