/* pedirle al usuario 2 numeros,por ejemplo 1 y 10, se deben mostrar los numeros impares que hay entre ese rango */
const num1 = parseInt(prompt('Introduce el primer número'));
const num2 = parseInt(prompt('Introduce el segundo número'));
let impar = [];
if ((isNaN(num1)) || (isNaN(num2))) {
    document.write('Por favor revisa los valores<br/>');

} else if(num2<num1){
    document.write('Por favor revisa los valores, el primer número debe ser menor y el segundo el número mayor<br/>');

}else{
    document.write(`<br/>Los números impares dentro del rango ${num1}-${num2} son:`);
    for (var i = num1; i <= num2; i++) {
        /* para no considerar los num del rango: num1+1 y <num2 */
        if ((i % 2) !== 0) {
            impar.push(i);
            document.write(`<br/>${i}`);

        }
        
    }
}
