
/* 
                Math.random 
                Gera um numero aleatório entre 0 e 0.9
*/
const numeroAleatorio = Math.random();
// console.log(numeroAleatorio);



// No segundo caso criei uma variavel e atribui uma operação, gerando um numero entre 0 e 9
const newNumber = numeroAleatorio * 10;
// console.log(newNumber);



// E para arredondar este número ???

const numeroInteiro = Math.floor(Math.random() * 10)
// console.log(numeroInteiro);



// Para gerar um numero dentro de um intervalo, usamos.
const max = 20;
const min = 10;
const maxMin = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(maxMin);

//  Usamos a mesma ideia só que  com um function

function randomRange(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(10, 5));