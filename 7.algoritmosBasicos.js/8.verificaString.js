function verificaString (string, numero) {  
    let resultado = "";
    if ( string.length > numero){
        resultado = string.slice(0, numero) + '...';
    } else {
        return string;
    }
    return resultado;
}

console.log(verificaString("angelo roberto pucci vogel", 6))