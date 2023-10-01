/* 
            Funções anonimas com ArrowFunctions
            Muitas vezes não precisamos nomear nossas functions,
            especialmente,
            quando passamos uma função como argumento para 
            outra função.
            
            Em vez disto, criamos funções anonimas.
            Como não vamos reutilizar essas funções posteriormente,
            não precisamos nomeá-las.
*/
/* 
             Quando a function execution apenas uma linha,    
             ou retorna apenas um valor, aaroow permite 
             omitir o RETURN assim como as {}

             Isto ajuda a criar funões menores.
             eXemplo.
*/

const variavelUmaLinha = () => "value";
console.log(variavelUmaLinha);

/* 
            ARROW FUNCTIONS   COM PARAMETROS

            Voçe pode passar argumentos para uma arrow
            assim como as functions comuns,

            Obs:
            1 - se houver um unico paramentro => pode omitir ()
            2 - mais de um parametro utiliza o ()
            const myVar = item => item * 2;
*/

const juntaArray = (item1, item2) => item1.concat(item2);

console.log(juntaArray([1,2],[3,4]))    

const boasVindas = (nome, sobrenome = ", vc nao digitou sua idade") => nome + sobrenome;

console.log(boasVindas("angelo", "Vogel"));

export {juntaArray}