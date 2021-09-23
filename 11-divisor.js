/* Mostrar todos los numero divisores de un número introducido.
 */
const num = parseInt(prompt('Ingresa un número'));
let divisor = [];
for(i=1; i<=num; i++){   
    if(num%i==0){
        divisor.push(i);     
    }

}
document.write(`Los divisores del número ${num} son:${divisor}`);