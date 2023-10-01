class Cliente{
    constructor(nome, idade, cpf, email, saldo){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
}

function depositar(valor){
    this.saldo += valor
}

function exibirSaldo (){
    console.log(this.saldo);
}

const angelo = new Cliente ("angelo", "31 anos", "029.096.101-79", "angelopvogel@email.com", 1000)


console.log(angelo);