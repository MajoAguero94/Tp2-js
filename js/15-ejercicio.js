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
uCont)