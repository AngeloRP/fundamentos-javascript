// Com as arrays ou listas podemos armazenar valores em uma unica variavel.
// Ex:
const myFamily = ["Marci", "julia", "Heitor", "Angelo"];
console.log(myFamily);

// Podemos criar um array multiDimensional, ou seja, um dentro do outro.

const nomeIdade= [
    ["Marci", 33],
    ["Angelo", 32]
    ];
console.log(`Meu nome é ${nomeIdade[0][0]} e minha idade é ${nomeIdade[0][1]} anos.`);

/* 
                Diferentemente das STRINGS  os ARRAY podem ser modificados após sua declaração.
                Mesmo que sejam feitas atraves da CONST
                Veja o exemplo. 
*/

//  Irei alterar a idade de MARCI na VARIAVEL   nomeIdade

nomeIdade[0] = ["Marciliana", 34];
console.log(nomeIdade);

// podemos perceber que a variavel nomeIdade  foi declarada como CONST  e mesma assim, conseguimos altera-lá.





