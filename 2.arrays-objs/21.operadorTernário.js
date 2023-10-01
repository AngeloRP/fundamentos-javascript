/* 
                Operador condicional ou
                operador ternário

                Pode ser usado com instrução IF/ELSE de uma linha
                Sitaxe          a ? b : c
                Onde    a é a condição
                        b é o codigo executado quando a função retorna TRUE
                        c é o codigo exec quando a funct retorna FALSE.
*/

function verifica(num1, num2) {
    return num1 === num2 ? "WOW, numbers Equality" : "Uff, Not Equality"
}

console.log(verifica(2, 2));
console.log(verifica(2, 3));


//  utilizando varias condicoes

function verificaNumber(numero) {
    return (numero > 0) ? "Numero positivo"
    : (numero < 0) ? "Numero negativo"
    : "numero igual a 0"
}

console.log(verificaNumber(2));
console.log(verificaNumber(-2));
console.log(verificaNumber(0));