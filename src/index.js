import cipher from "./cipher.js";

//ATRAER INFORMACION HTML
function encondeHandler() {
  const mensajeIngresado = document.getElementById('mensaje').value;
  const mensajeCifrado = cipher.encode(33, mensajeIngresado);
  document.getElementById('mensaje').value = mensajeCifrado;
  // desactivar boton
  botonCifralo.disabled = true;
  botonDecifralo.disabled = false;
}

function decodeHandler() {
  const mensajeIngresado = document.getElementById('mensaje').value;
  const mensajedescifrado = cipher.decode(33, mensajeIngresado);
  document.getElementById('mensaje').value = mensajedescifrado;
  botonCifralo.disabled = false;
  botonDecifralo.disabled = true;
}

const botonCifralo = document.getElementById("buttonEncode");
botonCifralo.addEventListener("click", encondeHandler);

const botonDecifralo = document.getElementById("buttonDecode");
botonDecifralo.addEventListener("click", decodeHandler);