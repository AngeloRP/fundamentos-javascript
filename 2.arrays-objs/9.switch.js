/* 
                Varias opções com SWITCH
                é indicado quando se tem muitas opções a testar ou validar.
                A Switch testa um valor e pode ter muitas instruções CASE as quais definem 
                os diversos valores possiveis.
*/

let expr = 'orange';

switch (expr) {
    case 'morango':
        console.log("sim, a fruta escolhida é morango");
        break;
    case 'orange':
        console.log("sim, a fruta escolhida é Orange");
        break;
    default:
        console.log("A fruta digitada não corresponde a cesta");
        break;
}

/* 
            é importante lembrar que a expressao é comparada com a case 
            através da comparação de igualdade estrita.

            Exemplo  de varias expressoes para a mesma expressao.
*/

let numerosAleatorios = 6;
switch (numerosAleatorios) {
    case 1:
    case 2:
    case 3:
         console.log("Voce digitou um numero baixo de 4");
        break;
    case 7:
    case 8:
    case 9:
         console.log("Voce digitou um numero igual ou acima de 7");
        break;
    default:
         console.log("Voçe digitou 5 ou 6");
        break;
}