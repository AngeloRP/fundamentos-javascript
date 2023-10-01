const posicao = (x,y) => {x,y};
console.log(posicao);

const pessoa = (name, age, gender) => {
    return {
        name,
        age,
        gender
    }
}
console.log(pessoa("angelo",32, "male"));


/* 
            REFATORAR 
*/

const bicicleta = {
    marchas: 2,
    novaMarcha(nova){
        this.marchas = nova;
    }
}
bicicleta.novaMarcha(3);
console.log(bicicleta.marchas);