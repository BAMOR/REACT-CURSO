const user = {
    username: 'john_doe',
    email: 'Correogoogle.com', 
    age: 30,
    ranking: 9,
}

// ⛔ FORMA ANTIGUA (verbose)
// const username = user.username;
// const ranking = user.ranking; 
// const age = user.age;

// ✅ FORMA MODERNA (desestructuración)
// "Extrae las propiedades username, ranking y age del objeto user"
const {username, ranking, age} = user;

console.log(`Username: ${username}, Ranking: ${ranking}, Age:${age}`);
console.log(user.username, user.ranking, user.age);