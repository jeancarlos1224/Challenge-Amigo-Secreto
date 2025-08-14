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

    crearElementosLista("listaAmigos","li",nombreAmigo);
    
}

function sortearAmigo(){
    let sorteo = Math.floor(Math.random()*listaAmigos.length); 
    let mostrar = document.getElementById("resultado").value = listaAmigos[sorteo];
    crearElementosLista("resultado","li",mostrar);
}

function crearElementosLista(lista, elemento,muestra){
    let listas = document.getElementById(lista);
    let elementoLista = document.createElement(elemento);
    elementoLista.textContent = muestra;
    listas.appendChild(elementoLista);
}