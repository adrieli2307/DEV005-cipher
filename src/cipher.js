const cipher = {
  encode: function (offset, message) {
    let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let mensajecifrado = "";
    for (let i = 0; i < message.length; i++) {
      const letraactual = message.charAt(i);
      let nuevaletra = "";
      // Revisar si es minuscula
      if (letraactual === letraactual.toLowerCase()) {
        abecedario = abecedario.toLowerCase();
      } else {
        abecedario = abecedario.toUpperCase();
      }

      // Revisar si existe en el vocabulario
      if (abecedario.indexOf(letraactual) === -1) {
        nuevaletra = letraactual;
      } else {
        const posicionactual = abecedario.indexOf(letraactual);
        const nuevaposicion = posicionactual + offset;
        nuevaletra = abecedario.charAt(nuevaposicion % 26);
      }
      mensajecifrado = mensajecifrado.concat(nuevaletra);
    }
    return mensajecifrado;
  },
  decode: function (offset, message) {
    const mensajedescifrado = this.encode(-offset, message)
    return mensajedescifrado;
  },
};

export default cipher;