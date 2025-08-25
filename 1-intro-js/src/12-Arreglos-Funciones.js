const papper = {
    producto: 'papper',
    price: 100,
    quantity: 5,
};
const invoices = [
    {

        id: 1,
        name: 'Compras de oficina',
        client: {
            name: 'Jhon',
            lastname: 'Doe',
        },
        items: [
            {
                producto: 'Keyboard',
                price: 399,
                quantity: 2,

            },
            {
                producto: 'mouse',
                price: 200,
                quantity: 1
            },
            papper,
        ]

    },
        {

        id: 2,
        name: 'Compras de computacion',
        client: {
            name: 'pepe',
            lastname: 'Doe',
        },
        items: [
            {
                producto: 'Keyboard',
                price: 399,
                quantity: 2,

            },
            {
                producto: 'Screen',
                price: 200,
                quantity: 1
            },
            {
                producto: 'cpu intel',
                price: 1000,
                quantity: 10
            },
        ]

    },
        {

        id: 3,
        name: 'Compras de papeleria',
        client: {
            name: 'maria',
            lastname: 'Doe',
        },
        items: [
            {
                producto: 'pencil',
                price: 200,
                quantity: 1
            },
            papper,
        ]

    }
    

];


// ✅ MAP - TRANSFORMA elementos → Retorna NUEVO ARRAY modificado
const invoiceName = invoices.map(alias => {
    return alias.name;
})
// RETORNA: ['Compras de oficina', 'Compras de computacion', 'Compras de papeleria'] (ARRAY)

// ✅ FIND - BUSCA elemento → Retorna PRIMER ELEMENTO que cumpla condición (OBJETO) o undefined
const invoiceFind = invoices.find(alias => alias.client.name === 'pepe');
// RETORNA: {id: 2, name: 'Compras de computacion', ...} (OBJETO) o undefined si no existe

// ✅ FILTER - FILTRA elementos → Retorna NUEVO ARRAY con elementos que cumplan condición (ARRAY)
const invoiceFilter = invoices.filter(alias => alias.id > 1);
// RETORNA: [{factura id:2}, {factura id:3}] (ARRAY) - Puede ser array vacío []

// ✅ FILTER con INCLUDES - FILTRA por contenido → Retorna NUEVO ARRAY (ARRAY)
const invoiceFilter2 = invoices.filter(alias => alias.items.includes(papper));
// RETORNA: [{factura con papper}, {otra factura con papper}] (ARRAY) o [] si ninguno tiene papper

// ✅ SOME - VERIFICA existencia → Retorna BOOLEAN (true/false)
const result = invoices.some(alias => alias.client.name === 'pepe');
// RETORNA: true (BOOLEAN) - porque existe al menos una factura de pepe

console.log('Map retorna:', invoiceName) // ARRAY
console.log('Find retorna:', invoiceFind) // OBJETO o undefined  
console.log('Filter retorna:', invoiceFilter) // ARRAY
console.log('Filter con includes retorna:', invoiceFilter2) // ARRAY
console.log('Some retorna:', result) // BOOLEAN