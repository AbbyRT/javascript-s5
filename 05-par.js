/* pedirle un numero al usuario y saber si es impar o par */
const num = parseInt(prompt('Introduce un número'));

if(isNaN(num)){
    document.write('Datos inválidos');
    /* otra forma de valdiar datos: con ciclo while isNaN */

}else if((num%2)===0){
    document.write(`El número ${num} es par`);

}else{
    document.write(`El número ${num} es impar`);
}
    
    



