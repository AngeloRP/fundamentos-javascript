/*
                REST como parametro de função
                Com ela, vc pode criar funções
                com um numero variavel de argumentos.


*/

function testeRest (...argumentos) {
    return `vc passou ${argumentos.length} argumentos!!! ` 
}

console.log(testeRest(0,1,2,3))
// PErcebe que, com o rest podemos passar varios argumentos

/* 
    Elimina a necessidade de verificar o array "arumentos"
    e nos permite usar map(), filter() e reduce() 
    no array de paramentros.
*/

let somaContas = (...valores) => {
    let total = 0;
    let qtdeValores = valores.length;
    for (let i = 0; i < qtdeValores; i++) {
        total += valores[i]
    }
    return total;
}
console.log(`A soma de gastos é : ${somaContas(100,200,300)} reais.`);