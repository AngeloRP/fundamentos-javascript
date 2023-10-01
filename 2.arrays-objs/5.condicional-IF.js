/* 
                Começando com a condicional IF
*/

function condicional (umaCondiçao) {
    if (umaCondiçao) {  // somente lerá o codigo caso a condição seja true.
        return "it was TRUE";
    } 
        return "it was FALSE" // percebe que esta linha esta fora do IF.
    }
console.log(`O primeiro teste é: ${condicional(true)}`);
console.log(`O primeiro teste é: ${condicional(false)}`);

/* 
                Operador de igualdade
                        ==
                
                Operador de estrita igualdade
                        ===
                Neste caso ele diferencia valores,
                como:   3 === '3'  retorna falso.
*/

// EXEMPLO

function comparaIgualdade (a, b) {
    if (typeof a === typeof b) {
        return "sim, thats was TRUES"
    }
    return "no, it was false"
}


console.log(comparaIgualdade(10, '10'));
console.log(comparaIgualdade(10, 10));

/* 
                Operador de desigualdade
                !=
                ele tambem converterá os tipos de dados
                da mesma forma que a igualdade
                ex:
*/

function comparacao (numero) {
    if (numero != 10 ){
        return "não é igual a 10"
    }
    return "é igual a 10"
}

console.log(comparacao(9));
console.log(comparacao(10));

//ex com    nao é estritamente igual
// !==

/* 
            Operando com >   maior que
*/

function tamanho (number) {
    if (number > 100) {
        return number + " é maior que 10";
    }
    if (number > 20) {
        return number + " é maior que 20"
    }
    return "é menor que 10"
}

console.log(tamanho(30));
console.log(tamanho(300));
console.log(tamanho(3));

// temos a comparação maior ou >=   segue o mesmo principio.

    /* 
                Operador lógico AND   &&

                o mesmo efeito pode ser usado com 2 if
                segue exemplos:
    */


function doisIF (num) {
    if (num > 5) {
        if (num < 10) {
            return "sim, lemos seu codigo e temos um numero entre 5 e 10"
        }
    }
    return "não este numero é maior que 10"
}               

console.log(doisIF(6));
console.log(doisIF(11));

