const invoce = {

    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name:'Jhon',
        lastname : 'Doe',
        age: 20,
    },
    items : [
        {
            producto: 'Keyboard',
            price: 399,
            quantity:2,

        },
        {
            producto:'mouse',
            price: 200,
            quantity: 1
        },
        {
            producto:'paper',
            price: 100,
            quantity: 10
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item =>{
            total = total + item.price * item.quantity;
            

        });
        return total;
    },
    greattin : function (){ // funciones de los objetos siempre con funtion no con flecha
        return `Hola ${invoce.client.name}`
    }
};

invoce.client.name = 'Paulo '; // asi se modifica los objetos
// invoce.total = 5000;

console.log(invoce);  // con el punto accedemos a un solo atributo
const greattin = invoce.greattin();
console.log(greattin);

console.log(`total: ${invoce.total()}`);