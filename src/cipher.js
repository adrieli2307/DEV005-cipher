const cipher = {
    encode: function(offset, message) {
        let abecedario = "abcdefghijklmnopqrstuvwxyz";
        let mensajecifrado = "";
        for (let i = 0; i < message.length; i++) {
            let letraactual = message.charAt(i);
            let nuevaletra = "";
            if (letraactual == " ") {
                nuevaletra = " "
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
        let abecedario = "abcdefghijklmnopqrstuvwxyz";
        let mensajedescifrado = "";
        for (let i = 0; i < message.length; i++) {
            let letraactual = message.charAt(i);
            let nuevaletra = "";
            if (letraactual == " ") {
                nuevaletra = " "
            } else {
                let posicionactual = abecedario.indexOf(letraactual);
                let nuevaposicion = posicionactual - offset;
                nuevaletra = abecedario.charAt(nuevaposicion % 26);
            }
            mensajedescifrado = mensajedescifrado.concat(nuevaletra);
        }
        console.log(mensajedescifrado);
        return mensajedescifrado;
    },
};

export default cipher;