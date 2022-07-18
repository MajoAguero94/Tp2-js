// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let numero = parseInt(prompt ('Ingrese un numero menor a 50'))

let x = 1
let y = 0

if (numero > 1 && numero <= 50) {
    for (x= 1; x<= numero; x++) {
        for(y=0; y<x; y++ ) {
            document.write (x)
        }
        document.write ('<br>')
    }
}else alert ('Ingrese un numero mayor a 1 y menor a 50')

