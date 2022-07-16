//  solicitar una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
//  0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

let nota = parseInt(prompt('Escriba una nota'))
console.log(nota)

switch (nota){
 case 0 :
  case 1 :
  case 2 :
    alert ('Muy deficiente')
   
    break;
    
    case 3 :
    case 4 :
        alert ('Insuficiente')
   break;

   case 5 :
   case 6 :
    alert ('Suficiente')

    break;

    case 7 :
        alert ('Bien')
        break;

        
        case 8 :
        case 9 :
            alert ('Notable')
            break;

            case 10 :
                alert ('Sobresaliente')
                break;

                default :
                   
                    alert ('Numero erroneo.Ingrese un nuevo numero')
                    
                   


}





