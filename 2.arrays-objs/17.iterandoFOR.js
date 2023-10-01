/* 
                Outra forma de utilizar o FOR é a iteração.  
                Utilizar um array com elementos e percorrer estes elementos.        
*/


const arrayNumeros = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
total += arrayNumeros[i]
console.log(` numero do array: ${arrayNumeros[i]}`);
}

console.log(` e o total da soma: ${total}`);




/* 
                                    Exemplo abaixo de como o LOOP itera ou percorre o array principal
                                    e inserindo  um for dentro de outro para iterar todos os subArray.

*/
const arrayAninhados = [
    [1,2],
    [3,4],
    [5,6]
]
console.log(` o tamanho do array é :${arrayAninhados.length}`);

for (let i = 0; i < arrayAninhados.length; i++) {
// O primeiro loop descrito acima e logado abaixo, interage no array principal, que contém 3 elementos.
    console.log(`loop ${i}`);
    // Depois criamos um loop para iterar nos elementos que contem array. 
    for (let j = 0; j < arrayAninhados[i].length; j++) {
//  Aqui mostramos em qual subloop estamos.  
        console.log(`subLoop ${j}`);
        //  E aqui mostra o conteudo dos subARRAYS; 
        console.log(` numero contido no subARRAY: ${arrayAninhados[i][j]}`);
    }
}