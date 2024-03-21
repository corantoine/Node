// // Ici on utilise le destructuring
// let {eleves, cours} = require('./formation')
// console.log(cours, eleves);

// const system = require("os")
// console.log(system.userInfo())

// const system = require("fs")
// console.log(system)

// throw new Error('Il y a une nouvelle erreur');

const http = require('http');
const fs = require('fs');
//
const server = http.createServer(
    (Request, Response) => {
        let fichier = "";
        // Méthode header : 2 params : noms / valeur

        // Response.setHeader("content-type", "text/html")
        // Response.write('<head><meta charset = "UTF-8"></head>')

        if ((Request.url === '/' || Request.url === '/home') && Request.method === 'GET') {
            fichier = './views/home.html';
        } else if (Request.url === '/formation' && Request.method === 'GET') {
            fichier = './views/formation.html';
        } else if (Request.url === '/entreprise' && Request.method === 'GET') {
            fichier = './views/entreprise.html';
        } else if (Request.url === '/profil' && Request.method === 'GET') {
            fichier = './views/profil.html';
        } else if (Request.url === '/contact' && Request.method === 'GET') {
            fichier = './views/contact.html';
        } else {
            fichier = './views/404.html';
        }

        fs.readFile(fichier, (err, data) => {
            if (err) {
                console.log(err);
                //Response.end indique qu'on a fini, pour que la page renvoie une réponse et arrête de chercher
                Response.end()
            } else {
                Response.write(data)
                Response.end()
            }
        })

    }
)
//
server.listen(8080, "localhost", () => {
    console.log("Server is listening on port 8080");
});

