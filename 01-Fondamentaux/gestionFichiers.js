const { log } = require('console');
const fs = require('fs');

// Ici on crée un dossier monDossier
// Cette fonction callback est destinée à la gestion des erreurs

// Ici on doit vérifier si un dossier existe ou non, s'il n'existe pas, on le créé, sinon on le supprime.

// Méthode n°1
// // rmdir permet de supprimer un dossier
// if (!fs.existsSync('./monDossier')){
// fs.mkdir('./monDossier', (err) => {
// if (err) {
//     console.log(err);
//     } else {
//         console.log('Dossier correctement créé');
//     }
// })
// } else {
// fs.rmdir('./monDossier', (err) => {
// if (err) {
//     console.log(err);
//     } else {
//         console.log('Dossier correctement supprimé');
//     }
// })
// }

// Les 2 font la même chose mais la méthode n°2 est plus efficace

// Méthode n°2
// fs.access('./monDossier', (err) => {
//     if (err) {
//         fs.mkdir('./monDossier', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('Dossier correctement créé');
//             }
//         })
//     } else {
//         fs.rmdir('./monDossier', (err) => {
//         if (err){
//             console.log(err);
//         } else {
//             console.log('Dossier correctement supprimé');
//         }
//     })
// }
// })


// const makeFile = () => {
//     fs.writeFile(
//       './monDossier/monFichier.txt', 
//       'ce fichier est écrit avec node js.',
//       (err) => {
//         if(err){
//           console.log(err);
//         } else {
//           console.log('le fichier a bien été');
//         }
//       }
//     )
//   }

// //Ceci est la même chose que le makeFile du dessus, mais en simplifié.
// const makeFile = () => {
//     fs.writeFile(
//         './monDossier/monFichier.txt',
//         'ce fichier est écrit avec node js.',
//         (err) => err ? console.log(err) : console.log('le fichier à bien été créé')
//     )
// }

// // // const createDir = () => {fs.mkdir('./monDossier', (Error)=>{
// // //     if (Error) {
// // //       console.log(Error);
// // //     } else {
// // //       makeFile()
// // //     }
// // //   })}

// //Ceci est la même chose que le createDir du dessus, mais en simplifié.
// const createDir = () => fs.mkdir('./monDossier', Error => Error ? console.log(Error) : makeFile())


// // // fs.access('./monDossier', (err) => {
// // //     if (err) {
// // //       createDir()
// // //     }
// // //   })

// //Ceci est la même chose que le fs.access du dessus, mais en simplifié.
// fs.access('./monDossier', err => err && createDir())

// // Pour lire le fichier :
// fs.readFile(
//     './monDossier/monFichier.txt',
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data.toString());
//         }
//     }
// )

// créer, supprimer un fichier
if (!fs.existsSync('./monDossier/monFichier.txt')) {
    fs.writeFile(
        './monDossier/monFichier.txt',
        'ce fichier est écrit avec node js.',
        err => err ? console.log(err) : console.log('Le fichier à bien été créé')
    )
} else {
    fs.unlink('./monDossier/monFichier.txt', (Error) => {
        if (Error) {
            console.log(Error);
        } else {
            console.log('Le fichier a bien été supprimé');
        }
    })
}
