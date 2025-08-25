// Arreglo de usuarios
const users = ['pepe', 'ana', 'maria', 'juan', 'sebastian', 'carlos', 'josefa']

// ⭐ DESTRUCTURING DE ARREGLO:
// - Las llaves cuadradas [] indican que estamos desestructurando un arreglo
// - El ORDEN importa (a diferencia de los objetos)
// - Cada variable corresponde al elemento en esa posición del arreglo

const [pepe, ana, maria, ...rest] = users
// ✅ pepe = users[0] = 'pepe'
// ✅ ana = users[1] = 'ana' 
// ✅ maria = users[2] = 'maria'
// ✅ ...rest = operador rest, captura todos los elementos restantes

console.log(pepe, ana, maria, ...rest);
// Output: pepe ana maria juan sebastian carlos josefa