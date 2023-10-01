function Pessoa(name,age,kg,altura) {
    this.name = name;;
    this.age = age;
    this.kg = kg;
    this.altura = altura;;
    this.legs = 2;
}

let angelo = new Pessoa ('angelo', 32, 81, 1.84);

console.log(angelo);


// INSTANCEOF
console.log(angelo instanceof Pessoa);
// verifica se angelo foi criado pela função construtora.

