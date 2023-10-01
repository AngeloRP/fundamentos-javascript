function repeteString(string, numeroVezes) {
    let result = "";
    for (let i = 0; i < numeroVezes; i++) {
        if (numeroVezes > 1) {
            result += string;
        }
    }
    return result;
}

console.log(repeteString('***', 3));