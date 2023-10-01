function verificaIndice(arr,num) {
    // função callback para ordenar;
    arr.sort((a,b) => a - b);
    console.log(arr);
    for (let i = 0; i < arr.length; i++){
        if ( arr[i] >= num){
            return i;
        }
    } 
    return arr.length;
}

console.log(verificaIndice([1,4,3,22,10,110,50,1200], 49));