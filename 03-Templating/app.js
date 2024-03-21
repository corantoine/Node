const express = require('express')
const { dirname } = require('path')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const {projects, subtitle} = require('./data.js')


// Explication middleware
// app.use((req, res, next) => {
//     console.log('Time%d', Date.now());
//     next()
// })

//Définition du moteur de template
//Pour dire a express que le moteur de template que l'on va utiliser est ejs
app.set('view engine', 'ejs')

// //définition des views (si mon dossier ne s'appelait pas "views" mais "toto" par exemple)
// app.set('views', 'toto')


app.use('/public', express.static(__dirname + '/public'))
app.use(morgan('dev'));
app.use(cors())
let title = '';
let currentPage = '';


app.get('/', (req, res) => {
    res.redirect(301, '/home')
})

app.get('/home', (req, res) => {
    // res.send('<h1>Bienvenue sur la page d\'accueil</h1>')
    title = 'Portfolio de Coralie';
    currentPage = 'home';
    res.status(200).render('home', { title, subtitle, currentPage, projects})
})
app.get('/formation', (req, res) => {
    title = 'Ma formation CDA';
    currentPage = 'formation';
    res.status(200).render('formation', { title, subtitle, currentPage })
})
app.get('/entreprise', (req, res) => {
    currentPage = 'entreprise';
    title = 'Rencontre avec la MAIF';
    res.status(200).render('entreprise', { title, subtitle, currentPage })
})
app.get('/profil', (req, res) => {
    currentPage = 'profil';
    title = 'Qui je suis ?';
    res.status(200).render('profil', { title, subtitle, currentPage })
})
app.get('/contact', (req, res) => {
    title = 'Me contacter';
    currentPage = 'contact';
    res.status(200).render('contact', { title, subtitle, currentPage })
})
// Use est l'équivalent des default dans les switch case
app.use((req, res) => {
    res.status(404).render('404')
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

