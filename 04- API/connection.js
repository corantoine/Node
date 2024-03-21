// On importe client de pg
const { Client } = require('pg');

// On crée une nouvelle instance de client
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "my_first_api"
})

module.exports = client