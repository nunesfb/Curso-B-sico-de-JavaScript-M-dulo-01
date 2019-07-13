var frutas = ["laranja", "banana", "mamao"];

console.log(frutas);
console.log(frutas[1]);
console.log(frutas.length);
console.log(frutas.sort()); //ordena, geralmente alfabetico
console.log(frutas.push("Limao")); //add final
console.log(frutas);
console.log(frutas.unshift("Lima")); //add inicio
console.log(frutas);
console.log(frutas.pop()); //remove final
console.log(frutas);
console.log(frutas.shift()); //remove inicio
console.log(frutas);

frutas.forEach(imprime); //calls a function for each array element

function imprime(value){
    console.log(value);
}