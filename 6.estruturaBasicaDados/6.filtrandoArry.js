function filtraArray (array, elemento) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
    if (array[i].indexOf(elemento) == -1) {
        newArray.push(array[i])
    } 
    }
    return newArray;
}


console.log(filtraArray([[2, 2, 1], [1, 6, 4], [3, 13, 26], [19, 3, 9]], 3));