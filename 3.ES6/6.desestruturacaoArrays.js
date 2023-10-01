/* 
            Usar a atribuição  desestruturação para
             atribuir variaveis a partir de array 

             A diferença principal entre a desestruturação e o Spread 
             é que o ultimo retira todos os elementos de um array, 
             e não permite escolher ou selecionar elementos especificos.

*/

const [numerb1, numerb2,,, numerb3] = [1,2,3,4,5];

console.log(numerb1, numerb2, numerb3);

//  Podemos utilizar as virgulas para acessar o indice do array desejado. Como mostra acima.

/* 
            Outra forma é ter variaveis e querer mudar o numero atribuido.
            ex abaixo:
*/

let a = 10, b = 5;
console.log(`A = ${a} e B = ${b} `);
[a,b] = [b, a]
console.log(`A = ${a} e B = ${b} `);