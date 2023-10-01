/* 
                Modificar um array utlizando CONST
                Usar a declaração CONST so impede a reatribuição
                do identificar(nome) da variável.
*/

const numeros = [1,2,3];

// numeros = [4,5,6];  <--- nao leuu.

numeros[2] = 4   // deu certo, atribuiu o indice especificado.


console.log(numeros);
numeros[0] = 3;
numeros[1] = 2;
numeros[2] = 1;
console.log(numeros);

// Congelando valor de const
let PI = 3.14;
PI = 0;
console.log(PI);
// percebeu que foi atribuido novo valor

let objPi = {
    pi: 3.14
}
Object.freeze(objPi) // congelou o objeto pi que tem valor 3.14
objPi.pi = 0
console.log(objPi);
