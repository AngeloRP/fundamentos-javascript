function emendar (arr1,arr2,numero){
    let novoArr = arr2.slice();
    console.log(novoArr);
    novoArr.splice(numero,0,...arr1);
    return novoArr;
}

console.log(emendar([1,2,3],[4,5,6], 1));