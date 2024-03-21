const express = require('express')
const { dirname } = require('path')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

// Explication middleware
// app.use((req, res, next) => {
//     console.log('Time%d', Date.now());
//     next()
// })

app.use('/public', express.static(__dirname + '/public'))
app.use(morgan('dev'));
app.use(cors())

app.get('/', (req, res) => {
    res.redirect(301, '/home')
})

app.get('/home', (req, res) => {
    // res.send('<h1>Bienvenue sur la page d\'accueil</h1>')
    res.status(200).sendFile('views/home.html', { root: __dirname })
})
app.get('/formation', (req, res) => {
    res.status(200).sendFile('views/formation.html', { root: __dirname })
})
app.get('/entreprise', (req, res) => {
    res.status(200).sendFile('views/entreprise.html', { root: __dirname })
})
app.get('/profil', (req, res) => {
    res.status(200).sendFile('views/profil.html', { root: __dirname })
})
app.get('/contact', (req, res) => {
    res.status(200).sendFile('views/contact.html', { root: __dirname })
})
// Use est l'équivalent des default dans les switch case
app.use((req, res) => {
    res.status(404).sendFile('views/404.html', { root: __dirname })
})

app.listen(8080, "localhost", () => {
    console.log("Server is listening on port 8080");
});


// // // Ici on utilise le destructuring
// // let {eleves, cours} = require('./formation')
// // console.log(cours, eleves);

// // const system = require("os")
// // console.log(system.userInfo())

// // const system = require("fs")
// // console.log(system)

// // throw new Error('Il y a une nouvelle erreur');

// const http = require('http');
// const fs = require('fs');
// //
// const server = http.createServer(
//     (Request, Response) => {
//         let fichier = "";
//         // Méthode header : 2 params : noms / valeur

//         // Response.setHeader("content-type", "text/html")
//         // Response.write('<head><meta charset = "UTF-8"></head>')

//         if ((Request.url === '/' || Request.url === '/home') && Request.method === 'GET') {
//             fichier = './views/home.html';
//         } else if (Request.url === '/formation' && Request.method === 'GET') {
//             fichier = './views/formation.html';
//         } else if (Request.url === '/entreprise' && Request.method === 'GET') {
//             fichier = './views/entreprise.html';
//         } else if (Request.url === '/profil' && Request.method === 'GET') {
//             fichier = './views/profil.html';
//         } else if (Request.url === '/contact' && Request.method === 'GET') {
//             fichier = './views/contact.html';
//         } else {
//             fichier = './views/404.html';
//         }

//         fs.readFile(fichier, (err, data) => {
//             if (err) {
//                 console.log(err);
//                 //Response.end indique qu'on a fini, pour que la page renvoie une réponse et arrête de chercher
//                 Response.end()
//             } else {
//                 Response.write(data)
//                 Response.end()
//             }
//         })

//     }
// )
// //
// server.listen(8080, "localhost", () => {
//     console.log("Server is listening on port 8080");
// });

