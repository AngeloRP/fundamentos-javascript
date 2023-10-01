// Utilizando colchetes para acessar o indice de uma string.


let nome = "angelo";
const firstLetter = nome[0];
console.log(`Olá ${nome}, a primeira letra do seu nome é: ${firstLetter}`);

/*
Para entender a imutabilidade de Strings

Depois que uma string é escrita ela não pode ser alterada apenas em uma 
letra.

ex:
let nome = "Jello";
nome[0] = "H";

O que pode ser feito é reatribuir uma string. Como no ex abaixo.
*/

// irei reatribuir a variavel nome escrita no inicio do codigo para exemplificar.

nome = "Angelo Roberto Pucci Vogel"
console.log(nome);

// Percebe-se que após a linha 23 acima, a VAriavel NOME foi reatribuida e atualizada.

/* 
            E para acessar a ultima letra de uma string GRANDE ? Como saberemos ????
*/

const ultimaLetra = nome[nome.length - 1];
console.log(`A ultima letra da variavel em questao é: ${ultimaLetra}`);

/* O mesmo conceito pode ser usado para encontrar a penultima, antepenultima, etc.... */



