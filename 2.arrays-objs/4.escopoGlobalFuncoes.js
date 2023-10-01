/* 
                            
                                ESCOPO GLOBAL

            variaveis declaradas fora de uma função tem escopo global;
            variaveis que nao são declaradas com CONS ou LET automaticamente
            são declaradas com escopo global.

            *no caso abaixo eu declarei a  pessoaDois sem a let ou const e mesmo 
            assim não foi para o escopo global*
*/


let pessoa = "Angelo";
let pessoaDois = "roberto"

function funcaoDois () {
    let string = "";
    if (typeof pessoa != "undefined") {
        string += "a pessoa chama-se " + pessoa
    } if (typeof pessoaDois != "undefined") {
        string += ", e a outra pessoa chama-se: " + pessoaDois
    }
    console.log(string);
}

funcaoDois();


            /* 
                    ESCOPO LOCAL
            
            VARIAVEIS que sao declaradas dentro de uma função
            assim como os parametros, tem escopo local.
            Quer dizer que são visiveis apenas dentro de uma função.            
            */

function adicao () {
    let num2 = 2;
    console.log(num2 + 2);
}

adicao(); // realizando a chamada o console mostrará a variavel num2

// console.log(num2);  // Neste caso não a variavel dará erro por nao estar em 
                    // escopo global;


/* 
            Diferenciar escopo global de local
            Podemos declarar 2 variaveis com o mesmo nome
            uma local e outra global
            A precedencia será da local;
*/

let var1 = "escopo global";

function mostraVar () {
    let var1 = "escopo local";
    return var1;
} 

console.log(mostraVar());



/* 
                ENTENDER O VALOR UNDEFINED RETORNADO DE UMA FUNÇÃO
                A funcao pode ou não utilizar o termo "return"
                No caso de não utilizar, ela processa o código internamente,
                mas o valor retornado é >>>>   undefined <<<<<<
*/


let variavel = 5;

function adicaoDoisNumeros (num) {
    return variavel += num;
}

console.log(`A soma dos números é : ${adicaoDoisNumeros(2)}`);

/* 
                Podemos atribuir um retorno de uma funcao a uma variavel.
                È importante lembrar que tudo que está a direita do sinal e = 
                é resolvido antes de o valor ser atribuido.
*/

// iniciamos com o numero 0
let numero  = 0;

//a funcao vai retornar a resolução da conta
function conta (num) {
    return (num + 10) / 2;
}

// depois após ler todo o codigo da direita do sinal de igual, que no caso
//  chama a função, processa o codigo e retorna o numero, atribuindo este resultado na variavel.
numero = conta(8);

console.log(`O resultado da função é: ${numero}`);

/* 
            Agora vamos fazer um exemplo prático;
*/

let myArray = [1, 2, 3, 4, 5];

function manipulaArray (array, numero) {
    array.push(numero);
    removido = array.shift();
    return removido;   
}

console.log(myArray);
console.log(manipulaArray(myArray, 6));
console.log(myArray);
