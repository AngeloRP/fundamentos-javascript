function verificaResto(arr, func) {
    let numero = 0;
    for (let i = 0; i < arr.length; i++){
        numero = arr[i];
        if (func(numero)){
            return numero;
        }
    }
    return undefined;
}

console.log(verificaResto([1,2,3,4,5], num => num % 2 === 0))