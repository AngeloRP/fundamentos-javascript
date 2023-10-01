/* 
                Ussando objetos para pesquisar propriedades
                podemos substituir o switch e cadeias de IF/ELSE
*/


function pesquisa(val) {
    let resultado = "";

    const objeto = {
        "angelo": "Roberto",
        "marci": "Silva",
        "julia": "Silva Pucci",
        "heitor": "silva Pucci Vogel"
    };

    resultado = objeto[val];


    return resultado;
}

console.log(pesquisa("julia"))