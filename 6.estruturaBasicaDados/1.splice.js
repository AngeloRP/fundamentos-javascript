// Exemplo de utilizada

let array = [2, 4, 5, 1, 7, 5, 2, 1];
console.log(array);
array.splice(0,2)
// 1° elemento em qual indice comeca a eliminar, e 
// 2° a quantidade de itens
console.log(array);

// splice nao apenas modifica como retorna um array novo.


// Podemos tambem adicionar itens no array, que nesta caso usamos 3 parameters

let outroArray = [1,2,3,4,5,6,7,8,9,10];
let inicioIndice = 4;
let qtdNumerosDeletados = 6;
outroArray.splice(inicioIndice,qtdNumerosDeletados,4,3,2,1)
console.log(outroArray)