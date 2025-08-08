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
    let lista = document.getElementById("listaAmigos");
    let elemento = document.createElement("li");
    elemento.textContent = nombreAmigo;
    lista.appendChild(elemento);

}



function sortearAmigo(){

}