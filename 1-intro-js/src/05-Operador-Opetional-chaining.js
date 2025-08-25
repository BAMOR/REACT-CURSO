const invoice = {

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
        return `Hola ${invoice.client.name}`
    }
};

console.log(invoice.company?.name);
console.log(invoice.client?.address?.city); // undefined porque no existe la propiedad address

if(invoice.company?.name){
    console.log('perfecto!!!!')
}else{
    console.log('no existe la compañia')
}

