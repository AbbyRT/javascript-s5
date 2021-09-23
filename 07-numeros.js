/* Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
 */
const num1 = parseInt(prompt('Introduce el primer número'));
const num2 = parseInt(prompt('Introduce el segundo número'));

if ((isNaN(num1)) || (isNaN(num2))) {
    document.write('Por favor revisa los valores<br/>');

} else if(num1>num2){
    document.write(`${num1}+${num2}=${num1+num2}<br/>`);
    document.write(`${num1}-${num2}=${num1-num2}<br/>`);
    
}else if(num1<num2){
    document.write(`${num1}*${num2}=${num1*num2}<br/>`);
    document.write(`${num1}/${num2}=${num1/num2}<br/>`);

}else if(num1===num2){
    document.write("Los números son iguales");
}

