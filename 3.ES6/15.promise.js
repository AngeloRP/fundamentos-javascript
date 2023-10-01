// Exemplo de PROMESSA

const obterRequisicaoServidor = new Promise ((resolve, reject) => {
    let respostaServidor = false;
    if (respostaServidor) {
        resolve("sim obtivemos resposta")
    } else {
        reject("nao obtivemos resposta")
    }
});

obterRequisicaoServidor.then(result => {
    console.log(result);
})

obterRequisicaoServidor.catch(error => {
    console.log(error);
})