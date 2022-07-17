// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
//Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.


let cadenaTexto = ''
 while(confirm('¿Desea ingresar un texto?')){
    
    let textoIngresado = prompt ('Ingrese un texto');
    
    cadenaTexto = cadenaTexto + textoIngresado + '-'
    document.write (textoIngresado + '-')
 }