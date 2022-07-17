// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let dni = parseInt (prompt('Ingrese su numero de documento'))
let resultado = dni % 23
console.log(resultado)

switch (resultado){

    case 0 :
        document.write ('Su letra asiganada es T');
        break;




    case 1 :
        document.write ('Su letra asiganada es R')

 break;


    case 2 :
        document.write ('Su letra asiganada es W')

        break;
    case 3 :
        document.write ('Su letra asiganada es A')

        break;
    case 4 :
        document.write ('Su letra asiganada es G')
        break;

    case 5 :
        document.write ('Su letra asiganada es M')

        break;
    case 6 :
        document.write ('Su letra asiganada es Y')

        break;
    case 7 :
        document.write ('Su letra asiganada es F')

        break;
    case 8 :
        document.write ('Su letra asiganada es P')

        break;
    case 9 :
        document.write ('Su letra asiganada es D')

        break;
    case 10 :
        document.write ('Su letra asiganada es X')
        break;

    case 11 :
        document.write ('Su letra asiganada es B')
        break;

    case 12 :
        document.write ('Su letra asiganada es N')

        break;
    

        
    case 13 :
        document.write ('Su letra asiganada es J')

        break;
    case 14 :
        document.write ('Su letra asiganada es Z')

        break;
    case 15 :
        document.write ('Su letra asiganada es S')
        break;

    case 16 :
        document.write ('Su letra asiganada es Q')
        break;

    case 17 :
        document.write ('Su letra asiganada es V')

        break;
    case 18 :
        document.write ('Su letra asiganada es H')
        break;

    case 19 :
        document.write ('Su letra asiganada es L')

        break;
    case 20 :
        document.write ('Su letra asiganada es C')
        break;
    case 21 :
        document.write ('Su letra asiganada es K')
        break;
    case 22 :
        document.write ('Su letra asiganada es V')
        break;
        
        default :
        alert ('No se encontro letra asignada')

        confirm( 'Desea volver a ingresasr su DNI?')



}