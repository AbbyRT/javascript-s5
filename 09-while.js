/* Ciclo while:
nos permite repetir bloques de código mientras una condición sea verdadera 
1) el ciclo for se usa cuando tenemos un numero definido de veces que queramos que se repita el ciclo
2) en el ciclo while no sabemos exactamente el num de veces que se va a repetir*/
/* ejercicio 1 */
/* let num1 = parseInt(prompt('Ingresa un número'));

while(isNaN(num1)){
    num1 = parseInt(prompt('Ingresa un número'));

} */

/* ejercicio 2 */
let num1 = parseInt(prompt("Ingresa un número"));
const num_secreto = 23;

while(num1 !==num_secreto){
    console.log("No adivinaste el número secreto, intenta de neuvo");
    num1 = parseInt(prompt("Ingresa un número"));
}

console.log('Felicidades, encontraste el número secreto');