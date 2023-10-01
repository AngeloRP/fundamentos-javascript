function maiorString (string) {
    let atual = 0;
    let maiorPalavra = 0;
    console.log(` tamanho da string fornecida : ${string.length} caracteres.`);
    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            if (atual > maiorPalavra) {
                maiorPalavra = atual;
            }
            atual = 0;
        } else {
            atual++;
        }
        if (atual > maiorPalavra) {
            maiorPalavra = atual;
        }
        console.log(`LOOP : ${string[i]}/ atual: ${atual} / maiorPalavra ${maiorPalavra}`); 
        } 
    return ' a maior paralvra contem : ' + maiorPalavra + ' letras.';
}

console.log(maiorString("The quick brown fox jumped over the lazy dog"));