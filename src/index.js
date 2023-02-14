import cipher from "./cipher.js";

cipher.encode(3, "teamo");
cipher.decode(3, "vgcoq");

//CIFRADO MENSAJE

//ATRAER INFORNACION HTML
let botonCifralo = document.getElementById("buttonEncode ");
botonCifralo.addEventListener("click", encondeHander);
let botonDecifralo = document.getElementById("buttonDecode ");
botonDecifralo.addEventListener("click", decodeHander);

function encondeHander() {
    console.log("dentro del encode handler");
    var mensajeIngresado = document.getElementById('mensaje').value;
    cipher.encode(3, mensajeIngresado);
}

function decodeHander() {
    console.log("dentro del encode handler");
    var mensajeIngresado = document.getElementById('mensaje').value;
    cipher.decode(3, mensajeIngresado);
}