/* 
                O operador lógico OR || retorna TRUE se qualquer um dos  operadores for true
*/


function testeOR(numero) {
    if(numero < 5 || numero > 10) {
        return "Naão digitou  entre 5 e 10"
    }
    return " Sim, este numero está entre 5 e 10"
}

console.log(testeOR(6));
console.log(testeOR(16));

/*  Percebe que apenas uma das condições são TRUE e mesmo assim ele processa o codigo. */


