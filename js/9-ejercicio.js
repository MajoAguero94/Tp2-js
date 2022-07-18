//Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.
let i = 0
for(i=0; i<=500; i++) {
    if (i % 5 ===0){
        document.write('-------' + '<br>')

    }
    document.write (i+'<br>')

    if(i%4 ===0){
        document.write ( 'Es multiplo de 4' + '<br>')
    }
    if (i%9 ===0){
        document.write('Es multiplo de 9' + '<br>')
    }
    
}