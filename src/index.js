import cipher from "./cipher.js";

//ATRAER INFORMACION HTML
function encondeHandler() {
    let mensajeIngresado = document.getElementById('mensaje').value;
    let mensajeCifrado = cipher.encode(3, mensajeIngresado);
    document.getElementById('mensaje').value = mensajeCifrado;
    console.log(mensajeCifrado);
}

function decodeHandler() {
    let mensajeIngresado = document.getElementById('mensaje').value;
    let mensajedescifrado = cipher.decode(3, mensajeIngresado);
    document.getElementById('mensaje').value = mensajedescifrado;
    console.log(mensajedescifrado);
}

let botonCifralo = document.getElementById("buttonEncode");
botonCifralo.addEventListener("click", encondeHandler);

let botonDecifralo = document.getElementById("buttonDecode");
botonDecifralo.addEventListener("click", decodeHandler);