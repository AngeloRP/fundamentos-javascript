/* 
                As subpropriedades podem ser acessadas atraves do
                .  e   []
*/

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

// Temos no exemplo acima objetos aninhados. a ideia é acessá-los  ->   atribui a uma variavel o GLOVEBOX

const contentsGloveBox = myStorage.car.inside["glove box"];

console.log(contentsGloveBox);
