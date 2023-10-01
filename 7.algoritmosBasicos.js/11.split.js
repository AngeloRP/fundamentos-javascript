function transformStrings(str) {
    let strArr = str.split(" ");
    let novaStringEditada = [];
    for (let indice in strArr){
        // console.log(strArr[indice])
        novaStringEditada[indice] = strArr[indice][0].toUpperCase() + strArr[indice].slice(1).toLowerCase()

    }
    //  o metedo join() transforma todos os itens de um array em uma string;
    return novaStringEditada.join(' ');
}

console.log(transformStrings("i'm a little tea pot"));