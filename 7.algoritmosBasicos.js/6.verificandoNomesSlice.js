function verificaFinal(string, target) {

    return string.slice(string.length - target.length) === target
}

console.log(verificaFinal('angelo roberto pucci vogel', 'vogel'))