/* 
        Voce pode rodar o codigo varias vezes.
        Ele roda até que a condicao seja verdadeira.

*/

const myArray = [];
let indice = 0;

while (indice < 5) {
    myArray.push(indice);
    indice++;
}
console.log(myArray);

//  Ordem descendente

const ourArray = [];
let i = 5;
while (i >= 0) {
    ourArray.push(i);
    i--;
}
console.log(ourArray);