/* 
            Como vimos anteriormente,
            Objetos podem conter tanto objetos aninhados como array aninhados.
            Semelhantes ao acesso de objetos anainhados,
            a notação de [] podem ser encadeadas para acessar ARRAYS aninhados.
*/

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulips",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

const secondTree = myPlants[1].list[1]
console.log(secondTree);