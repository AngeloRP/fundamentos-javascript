/* 
         COPIAR ITENS DE UM ARRAY USANDO O   SLICE 
        Em vez de modificar um array, 
        ele copia ou extrai elementos par um novo array

        ** Não modificando o array chamado

        2 parametros
        1 é o indice onde inicia a extração 
        2 é o indice onde deve para a extração, Não incluindo este.
 */


function foreCast (arr) {
    let newArr = arr.slice(2,4)
    return newArr;
}

console.log(foreCast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));