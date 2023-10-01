
function eliminaFalse(arr) {
    result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i]){result.push(arr[i])}
    }
    return result;
}


console.log(eliminaFalse([1,false,2,3,'',undefined,null]))