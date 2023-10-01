// exemplo de escapar as literais em strings

const name = "Angelo Roberto, \"Professor de educacao fisica\"";
console.log(name);

let filho1 = "julia, ";
let filho2 = "Heitor. ";

filho1 += filho2;

console.log(filho1);

// OU

filho1 += " Menina, 6 anos, 1.20m. 25kg."
console.log(filho1);

// concatenar strings com variaveis

let nome1 = "Júlia";
let string = ", Olá, tudo bem ? Meu nome é " + nome1 + ". Qual seu nome?"
console.log(string);


// forma de adcionar uma string contida em uma variavel a outra variavel;
nome1 += string;
console.log(nome1)
 