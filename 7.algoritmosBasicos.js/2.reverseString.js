function reverseString (string) {
    let reverseStr = "";
    for (let i = string.length - 1; i >= 0; i--){
        reverseStr += string[i];
    }
    return reverseStr;
}

console.log(reverseString("hello"));
console.log(reverseString("angelo pucci vogel"));
console.log(reverseString("marciliana silva"));
console.log(reverseString("julia"));
console.log(reverseString("heitor"));