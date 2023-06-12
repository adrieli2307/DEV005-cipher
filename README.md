# ROMEO Y JULIETA

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. ¿Quiénes son los principales usuarios de producto?](#3-Quiénes-son-los-principales-usuarios-de-producto)
* [4. ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?](#4-Cuáles-son-los-objetivos-de-estos-usuarios-en-relación-con-tu-producto)
* [5. Cómo crees que el producto que estás creando está resolviendo sus problemas](#5-Cómo-crees-que-el-producto-que-estás-creando-está-resolviendo-sus-problemas)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)


***

## 1. Preámbulo

Cifrado Cesar se clasifica como un cifrado por sustitución en el que el alfabeto en el texto plano se desplaza por un número fijo en el alfabeto, 
cuentan los antiguos escritos romanos que el emperador Julio César utilizaba este tipo de encriptación para cifrar sus mensajes militares y que 
sus enemigos no pudieran leerlos si capturaban al mensajero.

![caeser-cipher](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBuqkRDlS4vNN4bMPQk7KrxuF7fxsy6fpbTraUXh92iZZHeQXkdKk5sS2f62muCu-cnw&usqp=CAU)

Para codificar un mensaje, simplemente se debe buscar cada letra de la línea del texto original y escribir la letra correspondiente en la línea codificada, 
en el caso si se va a decodificarlo se debe hacer lo contrario.

Si se realiza un desplazamiento de tres, la A sería sustituida por la D (situada tres lugares a la derecha de la A), la B sería reemplazada por la E, etc.

Ejemplo: 

El siguiente mensaje sin Cifrado Cesar : 
-  "Eres el amor de mi vida y te amo"

Con Cifrado Cesar (3 digitos de desplazamiento):
- "Lylz ls htvy kl tp cpkh f al htv"

## 2. Resumen del proyecto

En este proyecto se creó una aplicación web que servirá para que se pueda cifrar y descifrar un texto o mensaje en el navegador.

La temática de este proyecto fue las cartas de amor, tomando como base a Romeo y Julieta, dos
amantes que tuvieron un trágico final por haberse querido tanto, pero que sus familias no los aceptaban.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/a/a3/DickseeRomeoandJuliet.jpg)

Con esta página, podrán ingresar mensajes que desen que solo sus parejas sepan cuál es su significado.

### Los objetivos generales de este proyecto son los siguientes

* Crear una página de cifrado y descifrado seguro.
* La página será de fácil accesibilidad y manejo.
* Salvaguardar los mensajes ingresados.

## 3. Quiénes son los principales usuarios de producto

Los principales usuarios de nuestro producto serían parejas de enamorados, que por alguna circunstancia ajena a su vida no pueden estar juntos o quieran darle algo de misterio a su relación.

Adicional se podría implementar como una página para practicar a ser detectives de mensajes secretos, al ser una interfaz accesible la pueden usar sin ningún problema o complicación. 

## 4. Cuáles son los objetivos de estos usuarios en relación con tu producto
* Tener un espacio seguro para poder compartir ideas o pensamientos secretos.
* Utilizarlo como un juego de detectives para fortalecer el razonamiento.

## 5. Cómo crees que el producto que estás creando está resolviendo sus problemas

Manteniendo el anonimato de sus escritos, crea una atmosfera de seguridad con la cual pueden expresarse libremente sin miedo a que puedan descubrir sus mensajes, eso es lo principal que buscan los usuarios de nuestra página.

Con ello estaremos cubriendo su principal necesidad de discreción.

## 6. Consideraciones técnicas

Con el fin de elaborar el proyecto, utilizamos las funciones Encode y Decode:

```
cipher.encode(offset, message)
cipher.decode(offset, message)
```

Estas funciones toman un valor numerico `offset` en el cual el mensaje `message` es cifrado utilizando Cifrado Cesar. Los detalles de la implementacion se encuentran en el archivo `/src/cipher.js`

Debido a que las operaciones `encode` y `decode` son inversas, la función `decode` simplemente llama a la funcion `encode`, pero con un `offset` negativo.