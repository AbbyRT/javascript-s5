/* funciones de flcha: otra manera de declarar funciones */
/* forma tradicional de trabajar con funciones: */
function suma(num1, num2){
    return num1 + num2;

} 

/* funcion de flecha */
const suma1 = (num1,num2) => {
    return num1 + num2;
}
document.write(`<p>${suma1(5,3)}</p>`);
/* Diferencia importante: solo se peude llamr despues de que se creo, no antes como las funciones normales */