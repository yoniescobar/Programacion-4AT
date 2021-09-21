'use strict';

//alert("Hola mundo")
//const nombre = prompt('Cual es tu nombre?');
//console.log(nombre);

//document.querySelector('.contenido').innerHTML = ` ${nombre} está aprendiendo JavaScript Moderno al 100%`;

// También se pueden crear arreglos
console.log([11, 12, 31, 40,51,67]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "juan", profesion: "Desarrollador Web", correo: "juan@gmail.com" }
console.log( obj );

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

console.table(["Yoni ", "Diego", "Cristhoper", "Mazariegos"]);

// o mostrar algún error
console.error("Algo salió mal");

// Limpiar la consola
console.clear();

// o mostrar algún error
console.error("Algo salió mal");
// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); console.warn("Eso no esta permitido"); console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.timeEnd('Hola');