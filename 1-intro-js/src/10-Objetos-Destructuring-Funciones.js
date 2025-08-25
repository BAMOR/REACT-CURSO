// Objeto user con varias propiedades
const user = {
    username: 'john_doe',
    email: 'Correogoogle.com', 
    age: 30,
    ranking: 9,
}

// Función que recibe un objeto como parámetro y hace DESTRUCTURING
// ⭐ IMPORTANTE: Las llaves {} alrededor de los parámetros indican destructuring
// Esto significa: "Extrae las propiedades username y email del objeto que recibas"
const detail = ({username, email}) => {
    // Ahora podemos usar username y email directamente como variables
    console.log(`el detalle del usuario ${username} con correo ${email}`)
    // ⚡ No necesitamos hacer user.username o user.email
}

// Llamamos la función pasando el objeto completo
detail(user)
// La función automáticamente extrae username y email del objeto