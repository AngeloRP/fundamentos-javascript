function welcome () {
    console.log("hello World");
}

welcome();

/* 
                Parâmetros são variáveis que atuam como espaços
                 reservados para os valores que são passados para
                  uma função, quando ela é chamada.
*/

function funcWithParams (num1, num2) {
    return `Temos o numero: ${num1} e o ${num2}`
}

console.log(funcWithParams(1, 2));

                // posso utlizar a forma de cima colocando o return
                // sem o return não temos nada
                // com o return mandamos um codigo para fora da função.

function funcao (num1, num2) {
    console.log(`Temos o numero: ${num1} e o ${num2}`);
}

funcao(2, 3);
                /*
                No ex acima ja pedimos algo dentro da 
                propria função.
                  */

                //  Mais um exemplo abaixo:

function multiplica (num1) {
    return num1 * 2;
}

let resultado = multiplica(2);
console.log(`Temos como retorno o  numero : ${resultado}`);

