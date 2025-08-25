


const products =['mesa', 'silla', 'ordenador', 'ratón', 'teclado']; // array tiene un indice y un valor


products.push('monitor', 'sony tv'); // añadir un elemento al final del array

console.log(products); 

// como recorrer un array
products.forEach(product => console.log(product)); // forEach es un método que tienen los arrays


for(const product of products){ // for of recorre los valores del array igual que el forEach aca se declara una variable product
    console.log(product);
}

for(let index = 0; index < products.length; index++){ // for clásico recorre los indices del array
    console.log(products[index]); // length es una propiedad que tienen los arrays
}

console.log(products[4])