// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let  frase = prompt('Introduzca una frase');
let cadena = frase.split('');

let invertirCadena = cadena.reverse ();
let unir = invertirCadena.join ('');
document.write (unir)