/* 
            Existem varios tipos de flags
            i    é a flag que ignora a caixa alta e baixa;

*/

let string = "freeCodeCamp";
let regex = /freecodecamp/i;
let resultado = regex.test(string);
console.log(resultado);