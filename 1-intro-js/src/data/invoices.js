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

// Función que busca factura por nombre de cliente (SÍNCRONA)
const invoiceByClientName = (clientName) => {
    return invoices.find(alias => alias.client.name === clientName);
}

// Función que busca factura por ID (SÍNCRONA)
const invoiceByid = (id) => {
    return invoices.find(alias => alias.id === id);
}

// ⭐ FUNCIÓN CON PROMESA - ASÍNCRONA
const findInvoiceById = (id) => {
    // Creamos una NUEVA PROMESA
    const promesa = new Promise((resolve, reject) => {
        // setTimeout simula una operación ASÍNCRONA (base de datos, API, etc.)
        setTimeout(() => {
            // Buscamos la factura (operación síncrona)
            const result = invoiceByid(id);

            // ⭐ DECIDIMOS el destino de la promesa:
            if (result) {
                resolve(result); // ✅ ÉXITO: La promesa se cumple
            } else {
                reject('error no existe la factura con el id'); // ❌ FALLO: La promesa falla
            }
        }, 2500); // Espera 2.5 segundos (simula delay de red/BD)
    });
    return promesa; // Retornamos la promesa
}

// Exportamos las funciones y variables
export {
    papper,
    invoices as default,
    invoiceByClientName,
    invoiceByid,
    findInvoiceById
}