// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : 
//(suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numero = parseInt (prompt('Ingrese un numero menor a 50'))
let x = numero

let i = x
if (numero > 1 && numero <= 50 ) {



for( x = numero; x >= 1; x--){
    for (i=x; i >= 1; i-- ){
        document.write (x)
    }
    document.write ('<br>')
}



}else (alert('Introduce un numeo menor a 50'))

