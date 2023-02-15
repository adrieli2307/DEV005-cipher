import cipher from "./cipher.js";

//ATRAER INFORMACION HTML
function encondeHander() {
    let mensajeIngresado = document.getElementById('mensaje').value;
    let mensajeCifrado = cipher.encode(3, mensajeIngresado);
    document.getElementById('mensaje').value = mensajeCifrado;
    console.log(mensajeCifrado);
}

function decodeHander() {
    let mensajeIngresado = document.getElementById('mensaje').value;
    let mensajedescifrado = cipher.encode(-3, mensajeIngresado);
    document.getElementById('mensaje').value = mensajedescifrado;
    console.log(mensajedescifrado);
}

let botonCifralo = document.getElementById("buttonEncode");
botonCifralo.addEventListener("click", encondeHander);

let botonDecifralo = document.getElementById("buttonDecode");
botonDecifralo.addEventListener("click", decodeHander);