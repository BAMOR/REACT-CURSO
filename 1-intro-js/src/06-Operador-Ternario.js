const promedio = 4.9;

// Operador ternario:
// ¿promedio >= 5.5? SI → 'aprobado', NO → 'rechazado'
let estatus = (promedio >= 5.5) ? 'aprobado' : 'rechazado';

console.log(`resultado ${estatus}`); // resultado rechazado

// Encontrar el mayor de 3 números:
let max = 0;
const a = 56;
const b = 8;
const c = 3;

// Primero comparamos a y b
max = a > b ? a : b; // ¿56 > 8? SI → max = 56

// Luego comparamos el resultado con c
max = max > c ? max : c; // ¿56 > 3? SI → max = 56

console.log(`el numero mayor es ${max}`); // el numero mayor es 56