// // Ici on utilise le destructuring
// let {eleves, cours} = require('./formation')
// console.log(cours, eleves);

// const system = require("os")
// console.log(system.userInfo())

// const system = require("fs")
// console.log(system)

// throw new Error('Il y a une nouvelle erreur');

const http = require('http');

//
const server = http.createServer(
    (Request, Response) => {
        // Méthode header : 2 params : noms / valeur

        Response.setHeader("content-type", "text/html")
        Response.write('<head><meta charset = "UTF-8"></head>')

        if ((Request.url === '/' || Request.url === '/home') && Request.method === 'GET') {
            Response.write('<h1>Vous êtes sur la home page</h1>');
        } else if (Request.url === '/formation' && Request.method === 'GET') {
            Response.write('<h1>Vous êtes sur la page de Simplon</h1>');
        } else if (Request.url === '/entreprise' && Request.method === 'GET') {
            Response.write('<h1>Vous êtes sur la page de la Maif</h1>');
        } else if (Request.url === '/profile' && Request.method === 'GET') {
            Response.write('<h1>Vous êtes sur la page profil</h1>');
        } else if (Request.url === '/contact' && Request.method === 'GET') {
            Response.write('<h1>Vous êtes sur la page contact</h1>');
        } else {
            Response.write('<h1>404 page non valide</h1>')
        }

        // Pour lui indiquer qu'on a fini
        Response.end()
    }
)
//
server.listen(8080, "localhost", () => {
    console.log("Server is listening on port 8080");
});

