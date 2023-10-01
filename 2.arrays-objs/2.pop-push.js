/* 
            Uma forma de adcionar itens em um array é através da função             .push()
            ex.
*/

const numeros = [1];
console.log(numeros);
//                      adcionando itens; 
numeros.push(2, 3);
console.log(numeros);
//                      Ou podemos adicionar um array;
//                      Vamos adcionar mais numeros ao array NUMEROS

numeros.push([4, 5, 6]);
console.log(numeros);

/* 
                Outra forma de adcionar elementos é com o UNSHIFT()
                No entanto, ele adiciona elementos no inicio do array.
*/





/* 
                POP()
                usado para retirar o  ultimo item do array.
                pode ser usado tambem para mostrar o valor retirado do ultimo array .
                como no EX abaixo.
*/

const pessoas = [["Angelo", 32], ["MArci", 34]];
console.log(`${pessoas} são pessoas do grupo.`);

// nesta forma retorna apenas o elemento exluido do array.
const ultimaPessoa = pessoas.pop();

console.log(pessoas);
console.log(ultimaPessoa);

/* 
                O mesmo pode ser feito com a função SHIFT()
                No entanto, ele somente exclui ou captura o
                primeiro elemento do array.
*/




