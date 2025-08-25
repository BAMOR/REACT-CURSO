// fetch() retorna una PROMESA que eventualmente tendrá la respuesta HTTP
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// ⭐ VERSIÓN CON THEN ANIDADO (menos elegante)
httpClient.then(response => {
    // response es el objeto completo de la RESPUESTA HTTP
    response.json().then(data => {
        // data es la información útil (el JSON parseado)
        console.log(data) // [{usuario1}, {usuario2}, ...]
    })
});

// ⭐ VERSIÓN CON THEN ENCADENADO (más elegante)
httpClient
    .then(response => response.json()) // response.json() también retorna promesa
    .then(data => console.log(data))   // data = resultado del JSON parseado

console.log("hola que tal"); // Esto se ejecuta PRIMERO (fetch es asíncrono)