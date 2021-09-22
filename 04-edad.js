/* programar calculadora para mostrar la edad, el usuario pone el año de nacimiento y nosotros le decimos su edad */
const fecha = new Date();
const ca = fecha.getFullYear(); // 2021
/* const ca= 2021; */ /* temporal */
/* console.log(typeof(ca)); */ /* para confirmar el tipo de dato */
const an = parseInt(prompt("¿En que año naciste?"));

document.write('<h2>Calculadora de edad</h2>');
document.write(`<h3>Año actual: ${ca}<br/>Año de nacimiento: ${an}</h3>`);

if (isNaN(an)) {
    document.write('Tipo de dato no válido :(');
} else if (an > ca) {
    document.write(`Por favor revisa el valor del año, no puede ser mayor a ${ca}:(`);

} else {
    const edad = ca - an;
    document.write(`Tu edad es de ${edad} años`);

}
/* typeof(edad)); */



