/* el do while primero hace y después pregunta, el bloque de código se ejecuta por lo menos una vez */
let num1= parseInt(prompt("Ingresa un número"));
do{
    document.write(`<p>El número introducido es ${num1}</p>`);
    num1= parseInt(prompt("Ingresa un número"));
} while(num1>5);
