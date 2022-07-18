// Realiza un script que genere un número aleatorio entre 1 y 99

function getRandomIntInclusive (min,max){
    min = Math.ceil(1);
    max = Math.floor(99);
    return Math.floor(Math.random() * (max-min+1) + min);

}
document.write( getRandomIntInclusive())