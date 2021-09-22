const nombre = prompt('¿cuál es tu nombre');
/* para convertir string a number: parseInt */
const edad = parseInt(prompt("¿cuál es tu edad?"));
console.log(typeof(nombre));
console.log(typeof(edad));
/* proceso inverso: recibir numero y devovler string, no se esta convirtiendo el valro como tal, ya que estan definidas como constantes
Nota: no olvidar parentesis vacios */
console.log(typeof(edad.toString()));