/*Switch: Nos ayuda a tomar decisiones, es una estructura de control de flujo */
/* ejercicio 1 */
/* const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

switch(edad){
    case 18:
        mensaje = "Acaba de cumplir la mayoría de edad";
        break;
    case 25:
        mensaje = "Ya eres un adulto";
        break;
    case 70:
        mensaje = "Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera del rango de edad";
        break;

}*/
/*no se puede poner un rango 
document.write(`<p>${mensaje}</p>`);   */

/* ejercicio 2 */

const nombre = prompt("Ingresa tu nombre");
let mensaje = '';
/* se usa tolowercase para convertir todas las letras a minúsculas */
switch (nombre.toLowerCase()){
    case 'carlos':
        mensaje = 'Eres administrador';
        break;
    case 'juan':
        mensaje = 'Eres usuario';
        break;
    default:
        mensaje = 'No tienes permiso para usar el sistema';
        break;
}
document.write(`<p>${mensaje}</p>`);
/* siempre es importante darle retroalimentacion al usuario acerca de lo que haga */