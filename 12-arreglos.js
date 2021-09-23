/* los arreglos son una estructura de datos, nos permiten tener un conjunto de datos */
//declaración de arreglos
const arreglo= [];
const arreglo2 = new Array();
let lenguajes = ['Javascript', 'Java', 'PHP', 'Python', 'C#', 'C++', 'Scala', 'Rust', 'Ruby', 'Cobol'];
/* for each combinacion del ciclo for, se aplica a cada elemento del arregglo para realizar alguna operacion */
/* for(let i = 0; i<lenguajes.length-1; i++){

} */
document.write('<ul>');
/* funcion anonima, es un requisito del metodo para que funcione 
lenguaje es un parametro de la funcion anonima*/
lenguajes.forEach(function(lenguaje, index) { 
    document.write(`<li>${index} - ${lenguaje} </li>`);
    
});
document.write('</ul>');

/* map, crea un nuevo arreglo con los resultados */
let numeros = Array(2,3,4, 27, 19,12);/* otra forma de declarar arreglo */
/* con map se crea un nuevo arreglo, realizando cambios a los elementos */
let numeros2 = numeros.map(function(numero){
    return numero * 2;
})

console.log(numeros);
console.log(numeros2);

/* includes determina si un arreglo contiene un valor, sale true or false */
console.log(lenguajes.includes('PHP')); /* resulta true ya que si esta en el arreglo*/

/* filter, crea u  nuevo arreglo que cumpla la condicion */
let filtrados =numeros.filter(function(numero){
    if (numero > 10){
        return numero;
    }
})
console.log(filtrados);