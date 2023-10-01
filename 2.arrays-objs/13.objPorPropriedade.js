const pessoa = {
    name: "Angelo",
    idade: 32,
    altura: 184,
    peso: 81
}

function testaObjeto(objeto, propriedadeObj) {
    if (objeto.hasOwnProperty(propriedadeObj)){
        return "A idade da pessoa é: " + objeto[propriedadeObj]
    } else {
        return "propriedade inesxistente"
    }
}

console.log(testaObjeto(pessoa, "idade"));

