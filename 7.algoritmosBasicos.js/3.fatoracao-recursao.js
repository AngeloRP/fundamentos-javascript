function fatoração (numero) {
    let produto = 1;
    for (let i = 2; i <= numero; i++) {
    produto *= i
 }
    return produto;
}

console.log(fatoração(5));