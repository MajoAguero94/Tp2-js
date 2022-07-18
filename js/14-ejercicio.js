//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
let palabraIntroducida = prompt("Introduzca una palabra o texto")
let aCont= 0;
let eCont= 0;
let iCont= 0;
let oCont= 0;
let uCont= 0;
let otrosCont = 0;
for (let i = 0 ; i < palabraIntroducida.length ; i++) {
    switch(palabraIntroducida.charAt(i)) {
        case "a":
        aCont++;
        break;
        case "e":
        eCont++;
        break;
        case "i":
        iCont++;
        break;
        case "o":
        oCont++;
        break;
        case "u":
        uCont++;
        break;
        default:
        otrosCont++;
        break;
    }
}
document.write("A: " + aCont + "<br>E: " + eCont + "<br>I: " + iCont + "<br>O: " + oCont + "<br>U: " +
uCont);