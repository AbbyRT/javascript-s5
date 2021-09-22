/* alert("holi"); */
/* para comprobar enlace de páginas */
const nombre = prompt('¿cuál es tu nombre');
const edad = prompt("¿cuál es tu edad?");
/* antes: console.log aparece en consola :V */
console.log('Hola '+ nombre + 'saludos. Tu edad es '+ edad + 'años');
/* template string permite imprimir variables y constantes dentro de strings 
las comillas especiales salen con: alt 96*/
/* es posible utilizar las etiquetas HTML, dentro de las comillas especiales */
const saludo = `<h1>Hola ${nombre} saludos.<br/> Tu edad es ${edad} años</h1>`;
/* para escribir directamente en el html: */
document.write(saludo);