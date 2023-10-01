function verificaMaioresNumeros (array) {
    let resultados = []; 
   
    for (let i = 0; i < array.length; i++){
    console.log(`loop: ${i} - array ${array[i]}`);
    let maiorNumero = [i][0];
    
    for (let j = 1; j < array[i].length; j++){
        console.log(`SUBloop: ${j} - numero ${array[i][j]}`);
        if (array[i][j] > maiorNumero){
            console.log(maiorNumero = array[i][j])
        } 
    }

    // este [i] abaixo permite que adcionemos ao array os numeros
    // caso nao colocamos, ele reatribuirá a variavel resultado, toda vez que realizar um loop;
    resultados[i] = maiorNumero;
    console.log(`Final do loop temos o resultado: ${resultados}`)  
  }
}
verificaMaioresNumeros([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

