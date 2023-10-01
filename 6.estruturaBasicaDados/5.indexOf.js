/* Verfificar a presenca de um elemento com indexOf() */

function verificarArray (array, elemento) {
    let resultado = "";
    if (array.indexOf(elemento) >= 0) {
     console.log(array.indexOf(elemento));
         resultado =  "resultado: "+ true;
    } else {
         resultado =  "resultado: "+ false;
    }
    return resultado;
    
}




console.log(verificarArray(['squash', 'onions', 'shallots'], 'shallots'));