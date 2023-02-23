import cipher from "./cipher.js";

//ATRAER INFORMACION HTML
function encondeHandler() {
  const mensajeIngresado = document.getElementById('mensaje').value;
  const mensajeCifrado = cipher.encode(3, mensajeIngresado);
  document.getElementById('mensaje').value = mensajeCifrado;
  console.log(mensajeCifrado);
  // desactivar boton
  botonCifralo.disabled = true;
  botonDecifralo.disabled = false;
}

function decodeHandler() {
  const mensajeIngresado = document.getElementById('mensaje').value;
  const mensajedescifrado = cipher.decode(3, mensajeIngresado);
  document.getElementById('mensaje').value = mensajedescifrado;
  console.log(mensajedescifrado);
  botonCifralo.disabled = false;
  botonDecifralo.disabled = true;
}

const botonCifralo = document.getElementById("buttonEncode");
botonCifralo.addEventListener("click", encondeHandler);

const botonDecifralo = document.getElementById("buttonDecode");
botonDecifralo.addEventListener("click", decodeHandler);