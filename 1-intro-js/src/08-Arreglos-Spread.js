// 📦 Array original de productos
const products = ['mesa', 'silla', 'ordenador', 'ratón', 'teclado']; 
// array tiene un indice y un valor

// ➕ Añadir elementos al FINAL del array ORIGINAL (modifica el array original)
products.push('monitor', 'sony tv'); 

// 🔄 CONCAT - crea un NUEVO array (no modifica el original)
// concat en lugar de añadir al final, crea un nuevo array por eso se crea una nueva variable
// concat une dos arrays y devuelve un nuevo array
const products2 = products.concat('cable', 'auriculares');

// 🍎 Array de frutas
const fruits = ['manzana', 'pera', 'piña', 'sandia'];

// 🛒 SPREAD OPERATOR para COMBINAR arrays y AÑADIR elementos
// spread operator para unir dos arrays y añadir más elementos
// Crea un NUEVO array que contiene:
// 1. Todos los elementos de products
// 2. Todos los elementos de fruits  
// 3. Los elementos adicionales: 'lechuga', 'tomate', 'cebolla'
const mercado = [...products, ...fruits, 'lechuga', 'tomate', 'cebolla'];

// 🛒 CONCAT para COMBINAR arrays y AÑADIR elementos (forma alternativa)
// spread operator para unir dos arrays y añadir más elementos
// Equivalente al spread operator pero con concat
const mercado2 = products2.concat(fruits).concat('lechuga', 'tomate', 'cebolla');

// 📊 MOSTRAR RESULTADOS:

// 🖨️ Array ORIGINAL modificado por push
console.log(products);  
// ['mesa', 'silla', 'ordenador', 'ratón', 'teclado', 'monitor', 'sony tv']

// 🖨️ NUEVO array creado por concat (products + nuevos elementos)
console.log(products2);
// ['mesa', 'silla', 'ordenador', 'ratón', 'teclado', 'monitor', 'sony tv', 'cable', 'auriculares']

// 🖨️ Array combinado con CONCAT
console.log(mercado2);
// [products2 + fruits + elementos adicionales]

// 🖨️ Array combinado con SPREAD OPERATOR (más moderno y legible)
console.log(mercado);
// [products + fruits + 'lechuga', 'tomate', 'cebolla']