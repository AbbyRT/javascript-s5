/* solicitar numeros al usuario , cuando el usuario introuce un numero negativo se muestra la suma y el promedio de los numeros introducidos previzmente , omitir el numero negativo*/
let acsum = 0; //suma
let cont = 0; //contador

do {
    var cnum = parseInt(prompt('Ingresa un número'));
    if (cnum >= 0) {
        document.write(`<br/>Número ingresado:${cnum}`);
        cont++; //contador aumenta
        acsum = acsum + cnum; //suma acumulada
        
    }
} while (cnum >= 0)

document.write(`<br/>La suma de los números es: ${acsum}<br/>El promedio de los números es: ${acsum/cont}`);
