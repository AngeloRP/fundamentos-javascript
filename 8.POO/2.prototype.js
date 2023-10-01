/* 
            Propriedades dentro de prototype são compartilhados entre todas as instâncias
*/

function Dog (name) {
    this.name = name;
}

Dog.prototype.numeroPatas = 2;

const kratus = new Dog("Kratu")

console.log(kratus.numeroPatas);