/*  exemplo de objeto simples */

const pessoa = {
    name: "angelo",
    idade: 32,
    peso: 82,
    hobby: ["basquete", "videogame"]
}
console.log(pessoa);

/* 
            Acessar propriedades com notação de pontos.
            Existem duas formas de acessar, com   .   e    []
            similar a acessar um array.

            Notação de ponto é quando vc sabe o nome da propiedade 
            que voçe quer acessar antecipadamente.

            ex:
*/

const myObj = {
    propriedade1: "valor1",
    propriedade2: "valor2"
}


const nomePessoa = pessoa.name;
console.log(nomePessoa);


/* 
            Outro forma de acessar informações de propriedades é atraves do []
            é obrigatorio usar [] quando sua propriedade possui espaço.
            É importante destacar que quando a propriedade possui espaço é necessasrio estar e
            entre ''  ou " "

*/

const testandoObjetos = {
    "prato principal": "pizza",
    "bebida principal": "heineken"
}

const comidaFavorita = testandoObjetos["prato principal"]
const bebidaFavorita = testandoObjetos["bebida principal"]

console.log(`Minha comida favotira é ${comidaFavorita} e minha bebida é ${bebidaFavorita}.`);


/* 
                acessar o valor de propriedades atraves de uma variavel
                sso pode ser muito útil para iterar através das propriedades
                de um objeto ou quando acessando uma tabela de pesquisa.
*/

const dadosPessoais = {
    nome: "angelo",
    idade: 32,
    peso: 82,
    altura: 184
}

const altura = "altura";
const  minhaAltura = dadosPessoais[altura]
console.log(`minha altura é : ${minhaAltura}`);

/* 
                Posso tambem atualizar valores de propriedades atraves do
                .  e   []
                como no ex abaixo

*/

dadosPessoais.nome = "Angelo Roberto Pucci Vogel";
console.log(dadosPessoais.nome);

dadosPessoais["peso"] = 80;
console.log(dadosPessoais["peso"]);

/*                Posso tambem criar novas propiedades */

dadosPessoais.email = "angelopvogel@emai.com"
console.log(dadosPessoais.email);

//              E para deletar ?

delete dadosPessoais.idade;
console.log(dadosPessoais);