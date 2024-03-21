let date = new Date

reverra 2024-03-18T10:15:47.534Z

date.getFullYear() renverra l'année uniquement

# Les fonctions fléchées : 

Si une fonction fléchée ne contient qu'un paramètre, on n'est pas obligé de le mettre entre (), si elle n'a qu'une seule exécution, pas obligé de mettre les {}

Ex : 

// Fonction fléchée, 
// 2 manières de l'écrire : 
const hello = (nom) => {
    console.log("Bonjour, je m'appelle " + nom);
} 

// S'il n'y a qu'un seul paramètre, on est pas obligé de mettre les parenthèses ni les accolades
const hello3 = nom => console.log("Bonjour, je m'appelle " + nom);


# Objet global : Un objet déjà crée

Un Objet qui est accessible partout.

# Objet litteral : Un objet que l'on crée
let voiture = {
    chevaux: 4,
    annee: 2024,
    energy: "diesel",
    a: () => console.log(this, this.energy),
    b: function () {
            console.log(this, this.energy)
    }
}

### Pour faire une instance d'un objet, on utilise new

<!------------ Notions à revoir ------------>

# Le destructuring :
let {chevaux, annee, energy} = voiture;
console.log(annee, energy);

# Les modules

Dans nos fichiers, formation.js est un module car on l'a exporté

Module > classe > objet > méthode

siwtch case

switch (ce que l'on teste)

switch (req.url) {
    case '/' :
    case '/home' :
    console.log('Vous êtes sur la home page)
    break;
    case '/formation':
    console.log('Vous êtes en formation chez Simplon')
    break;
    case '/entreprise' :
    console.log('Vous êtes en alternance à la Maif)
    default:
    console.error('404 page non valide')
    break; 
}


toString : permet de transformer les données binaires en txt