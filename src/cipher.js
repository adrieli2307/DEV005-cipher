const cipher = {
    encode: function(offset, message) {
        let abecedario = "abcdefghijklmnopqrstuvwxyz";
        let mensajecifrado = "";
        for (let i = 0; i < message.length; i++) {
            let letraactual = message.charAt(i);
            let posicionactual = abecedario.indexOf(letraactual);
            let nuevaposicion = posicionactual + offset;
            let nuevaletra = abecedario.charAt(nuevaposicion % 26);
            mensajecifrado = mensajecifrado.concat(nuevaletra);
        }
        console.log(mensajecifrado);
    },
    decode: function(offset, message) {
        let abecedario = "abcdefghijklmnopqrstuvwxyz";
        let mensajedescifrado = "";
        for (let i = 0; i < message.length; i++) {
            let letraactual = message.charAt(i);
            let posicionactual = abecedario.indexOf(letraactual);
            let nuevaposicion = posicionactual - offset;
            let nuevaletra = abecedario.charAt(nuevaposicion % 26);
            mensajedescifrado = mensajedescifrado.concat(nuevaletra);
        }
        console.log(mensajedescifrado);
    },
};

export default cipher;