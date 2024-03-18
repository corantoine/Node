let voiture = {
    chevaux: 4,
    annee: 2024,
    energy: "diesel",
    // // a est une fonction fléchée, ceci renvoie l'objet mais vide
    // a: () => console.log(this),
    // // b est fonction native, ceci renvoie l'objet et ses détails
    // b: function () {
    //     console.log(this)
    a: () => console.log(this, this.energy),
    b: function () {
            console.log(this, this.energy)
    }
}

// // Pour accéder à l'objet depuis l'extérieur de l'objet
// console.log(voiture.energy);
// // ou
// console.log(voiture["energy"]);

// // Pour accéder à l'objet depuis l'intérieur de l'objet
// le destructuring
let {chevaux, annee, energy} = voiture;
console.log(annee, energy);