function converteCelsius (celsius) {
    let fahrenheit = Math.floor(celsius * (9/5) + 32);
    return `a temperatura em Fahrenheit é: ${fahrenheit} °F`;
} 

console.log(converteCelsius(20));