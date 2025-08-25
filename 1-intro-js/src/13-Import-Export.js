import invoices,  { papper,invoiceByClientName } from './data/invoices.js';

 


// ✅ MAP - TRANSFORMA elementos → Retorna NUEVO ARRAY modificado
const invoiceName = invoices.map(alias => {
    return alias.name;
})
// RETORNA: ['Compras de oficina', 'Compras de computacion', 'Compras de papeleria'] (ARRAY)

// ✅ FIND - BUSCA elemento → Retorna PRIMER ELEMENTO que cumpla condición (OBJETO) o undefined
// const invoiceFind = invoices.find(alias => alias.client.name === 'pepe');
// RETORNA: {id: 2, name: 'Compras de computacion', ...} (OBJETO) o undefined si no existe

// ✅ FILTER - FILTRA elementos → Retorna NUEVO ARRAY con elementos que cumplan condición (ARRAY)
const invoiceFilter = invoices.filter(alias => alias.id > 1);
// RETORNA: [{factura id:2}, {factura id:3}] (ARRAY) - Puede ser array vacío []

// ✅ FILTER con INCLUDES - FILTRA por contenido → Retorna NUEVO ARRAY (ARRAY)
const invoiceFilter2 = invoices.filter(alias => alias.items.includes(papper));
// RETORNA: [{factura con paper}, {otra factura con paper}] (ARRAY) o [] si ninguno tiene paper

// ✅ SOME - VERIFICA existencia → Retorna BOOLEAN (true/false)
// const result = invoices.some(alias => alias.client.name === 'pepe');
console.log('BUSCAR POR NOMBRE CLIENTE')
console.log(invoiceByClientName('pepe'))
// RETORNA: true (BOOLEAN) - porque existe al menos una factura de pepe

console.log('Map retorna:', invoiceName) // ARRAY
// console.log('Find retorna:', invoiceFind) // OBJETO o undefined  
console.log('Filter retorna:', invoiceFilter) // ARRAY
console.log('Filter con includes retorna:', invoiceFilter2) // ARRAY
console.log('Some retorna:', result) // BOOLEAN