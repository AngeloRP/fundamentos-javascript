/* 
            Usar atribuição de desestruturação para extrair valores de objetos

*/

const pessoa = {
    name: "angelo",
    age: 32, 
    altura: 184
}

// const name = pessoa.name;
// const age = pessoa.age;
// console.log(name, age, " anos.");

//  outra forma de acessar um objeto e atribuir valores retirados de um obj.

let {name, age} = pessoa;
console.log(name, age, "anos");

const {altura} = pessoa;
console.log(altura, "cm");

// Posso tbm nomear as variaveis do obj.

const user  = {
    name: 'julia',
    age: 6
}

let {name: nomePessoa} = user;
console.log(` o nome do usuario é : ${nomePessoa}`);


/* 
            Usar a atribuição de desestruturação para atribuir variaveis de objetos aninhados;
*/
//  exemplo de objeto aninhado;
const cadastroPessoaFisica = {
    angelo: {
        idade: 30,
        peso: 84,
    }
}

// vamos dizer que quero acessar todos os valores da propriedade do OBJ "angelo"

const {angelo: {idade, peso}} = cadastroPessoaFisica


console.log(idade, peso);

/* 
        posso nomear as variaveis idade e peso tambem.
        EX:

        const {angelo: {idade: idadePessoa, peso: pesoPessoa}}

*/

