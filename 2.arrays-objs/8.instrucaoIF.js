//  Resolvendo problema.

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function pontosGolfe(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par -2) {
        return names[1]
    } else if (strokes == par -1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    }
    return "Troque-me";
}

console.log(pontosGolfe(5,1));
console.log(pontosGolfe(5,2));
console.log(pontosGolfe(5,4));
console.log(pontosGolfe(5,5));
console.log(pontosGolfe(5,6));
console.log(pontosGolfe(5,7));
console.log(pontosGolfe(5,8));
