const persona = {
    nombre: 'Aby',
    apellidos: 'Romero Trejo',
    correo: 'aby@romero'

}
/* el objeto nos permite definir una estructura de clave valor (en pares) */
document.write(persona.nombre);

const articulos = [
    {
        id: 1,
        nombre: 'Alimento para perros',
        precio: 30.50
    },

    {
        id: 2,
        nombre: 'Alimento para gatos',
        precio: 60.25
    },

    {
        id: 3,
        nombre: 'Alimento para aves',
        precio: 12.55
    }
]
/* es posible hacer un arreglo con objetos por dentro :o */
document.write('<br/>'+ articulos[0].id);
/* la informacion de un formulario se procesa en el back end */
/* ocn las apis se hace intercambio JSON: objetos de javascript */
