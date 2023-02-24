import cipher from "./cipher.js";

//ATRAER INFORMACION HTML
function encondeHandler() {
  const cantidad = document.getElementById('cantidad').value;
  const mensajeIngresado = document.getElementById('mensaje').value;
  const mensajeCifrado = cipher.encode(Number(cantidad), mensajeIngresado);
  document.getElementById('mensaje').value = mensajeCifrado;
  // Desactivar boton
  botonCifralo.disabled = true;
  botonDecifralo.disabled = false;
}

function decodeHandler() {
  const cantidad = document.getElementById('cantidad').value;
  const mensajeIngresado = document.getElementById('mensaje').value;
  const mensajedescifrado = cipher.decode(Number(cantidad), mensajeIngresado);
  document.getElementById('mensaje').value = mensajedescifrado;
  botonCifralo.disabled = false;
  botonDecifralo.disabled = true;
}

const botonCifralo = document.getElementById("buttonEncode");
botonCifralo.addEventListener("click", encondeHandler);

const botonDecifralo = document.getElementById("buttonDecode");
botonDecifralo.addEventListener("click", decodeHandler);