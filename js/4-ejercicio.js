//Realiza un script que pida números hasta que se pulse “cancelar”. 
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

numeroAcumulado = 0
while (confirm('Dese ingresar un numero') ) { 
let numeroIngresado = parseInt ( prompt ('Ingrese un numero' ))
numeroAcumulado = numeroAcumulado + numeroIngresado
document.write ('La suma es: ' + (numeroAcumulado))





}