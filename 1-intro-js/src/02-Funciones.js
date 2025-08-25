const sayHello = (name = 'pepe', age = 0)=>  `Hola mundo funcion ${name} ${age}`;  
const add = (a = 0, b = 0)=>  a + b;  
// name es un parametro   se le coloco una un resultado al parametro si el usuario no lo coloca


const resultado = sayHello('paulo', 90);  // paulo es el resultado de un parametro de una funcion

console.log(resultado);

console.log(add(10,8))
// console.log(sayHello());