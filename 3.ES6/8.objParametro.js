/* 
            Usar atribuição de desestruturação para passar um objeto como parâmetro de uma função


*/

const pessoa = {
    name: "angelo",
    idade: 32,
    altura: 184,
    peso: 81
}

const usuario = ({name, idade}) => {
    return name + idade
}

const chama = usuario(pessoa)
console.log(chama);


const calculaImc = ( {altura, peso}) => {
    return (altura ** 2) / peso
}

console.log(calculaImc(pessoa))