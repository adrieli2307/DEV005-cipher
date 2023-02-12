import cipher from "./cipher.js";

cipher.encode(2, "teamo");
cipher.decode(2, "vgcoq");

function descifralo() {
    let mensaje = prompt("escribe tu mensaje");
    if (nombre == "") {
        alert("Debes ingresar tu nombre");
        return;
    }

    document.getElementById("mensaje_saludo").innerHTML =
        "Bienvenido " + nombre + " vamos a jugar";
}
document.getElementById("myButton").style.display = "block";
document.getElementById("mensaje_saludo").style.display = "block";
document.getElementById("mensaje_bienvenida").style.display = "none";

let botonJugar = document.getElementById("myButton");
botonJugar.addEventListener("click", descifralo);