/* 
            Enquanto o slice() nós permite extrai 
            elementos selecionados para copiar
*/

function copiarArray (array, numerosDeLoop) {
    let newArray = [];
    while (numerosDeLoop >= 1) {
        newArray.push([...array])
        numerosDeLoop--;
    }
    return newArray;
}

console.log(copiarArray([1,2,3], 3));