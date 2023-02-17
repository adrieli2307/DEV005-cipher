const cipher = {
    encode: function(offset, message) {
        let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let mensajecifrado = "";
        for (let i = 0; i < message.length; i++) {
            let letraactual = message.charAt(i);
            let nuevaletra = "";

            // Revisar si es minuscula
            if (letraactual == letraactual.toLowerCase()) {
                abecedario = abecedario.toLowerCase();
            } else {
                abecedario = abecedario.toUpperCase();
            }

            // Revisar si existe en el vocabulario
            if (abecedario.indexOf(letraactual) == -1) {
                nuevaletra = letraactual;
            } else {
                let posicionactual = abecedario.indexOf(letraactual);
                let nuevaposicion = posicionactual + offset;
                nuevaletra = abecedario.charAt(nuevaposicion % 26);
            }
            mensajecifrado = mensajecifrado.concat(nuevaletra);
        }

        console.log(mensajecifrado);
        return mensajecifrado;
    },
    decode: function(offset, message) {
        let mensajedescifrado = this.encode(-offset, message)
        console.log(mensajedescifrado);
        return mensajedescifrado;
    },
};

export default cipher;