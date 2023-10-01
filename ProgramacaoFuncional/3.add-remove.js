const listaLivros = ['O homem mais rico da babilonia', 'inteligencia emocional', 'habitos atomicos', 'treinamento de força'];

function addLivros(arrLivros, livroNovo) {
    let novaListaLivros = [...arrLivros];
    novaListaLivros.push(livroNovo);
   
    return novaListaLivros;
}

let adcLivros = addLivros(listaLivros, 'A biblia sagrada');
console.log(adcLivros);


