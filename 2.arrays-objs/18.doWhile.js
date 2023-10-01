/* 
                O loop DO WHILE  garante ao menos uma execução de código;
*/

const array = [];

let i = 5;

do {
    array.push(i)
} while (i < 5);

console.log(array);

//                           Percebe-se que, primeiro o o método executa e 
                            // depois verifica a condição while. 