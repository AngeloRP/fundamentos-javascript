/* Implementando o instrução ELSE caso o codigo seja FALSO: */

function maiorOuNao(valor) {
    let resultado = "";
    if (valor > 5) {
        resultado = "sim, valor maior que 5;"
    } else {
        resultado = "NÂo, valor menor ou igual a 5";
    }
    return resultado;
}

console.log(maiorOuNao(4));
console.log(maiorOuNao(14));


function testIfElse(numero) {
    if (numero > 10) {
        return "numero maior que 10"
    } else if (numero < 5) {
        return "numero menor que  5"
    } else {
        return "numero entre 5 e 10"
    }
}

console.log(testIfElse(22));
console.log(testIfElse(2));
console.log(testIfElse(10 ));

/* 
                Entender a ordem lógica das intruções ELSE IF
                A leitura ou processamento do codigo vem de cima para baixo
                então, voçe deve ser cuidadoso com qual instrução vem primeiro.
*/

function ordemInstrucao(number) {
    if (number < 5) {
        return "less than 5"
    } else if (number < 10) {
        return "less than 10"
    } else {
        return "greater than or equal to 10"
    }
}

console.log(ordemInstrucao(4));
console.log(ordemInstrucao(6));
console.log(ordemInstrucao(14));


/* 
                Encadear instruções IF ELSE
*/

function encadearIFELSE(valor) {
    let resultado = "";
    if (valor < 5) {
        resultado = "numero menor que 5"
    } else if ( valor < 10) {
        resultado = "numero menor que 10"
    } else if ( valor < 20) {
        resultado = "numero menor que 20"
    } else {
        resultado = "numero MAIOR que 20"
    }
    return resultado;
}

console.log(encadearIFELSE(4));
console.log(encadearIFELSE(7));
console.log(encadearIFELSE(14));
console.log(encadearIFELSE(24));