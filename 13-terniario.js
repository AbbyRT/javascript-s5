/* operador terniario: forma abreviada del if, true y false */
const edad = 20;
/* if(edad>=18){
    console.log('eres mayor de edad');
}else {
    console.log('eres menor de edad');
} */

const mensaje = edad > 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
document.write(`<p>${mensaje}</p>`);