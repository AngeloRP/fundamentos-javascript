const listaNumeros = [1,2,3,4,5,6,7,8,9];

const removeFirstTwo = (lista) => {
    const [,,...espalhaArray] = lista;
    return espalhaArray
}

const chamaFunction = removeFirstTwo(listaNumeros);
console.log(chamaFunction);