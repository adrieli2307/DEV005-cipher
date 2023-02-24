const cipher = {
  encode: function (offset, message) {

    if (typeof offset === 'number' &&
      typeof message === 'string') {
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
          // Si es menor a 0 
          let nuevaposicion = (posicionactual + offset) % 26;
          if (nuevaposicion < 0) {
            nuevaposicion = nuevaposicion + 26
          }
          nuevaletra = abecedario.charAt(nuevaposicion);
        }
        mensajecifrado = mensajecifrado.concat(nuevaletra);
      }
      return mensajecifrado;
    } else {
      throw new TypeError()
    }

  },
  decode: function (offset, message) {
    const mensajedescifrado = this.encode(-offset, message)
    return mensajedescifrado;
  },
};

export default cipher;