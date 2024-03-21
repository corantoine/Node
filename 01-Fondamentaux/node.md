# Principe d'instance :

Si j'achète l'iphone 15 pro, je ne suis pas propriétaire de l'iphone 15 pro, je suis propriétaire d'une instance du téléphone.
A chaque fois qu'apple va construire un nouveau téléphone, il fera "new iphone 15 pro" ce qui créera une instance de l'objet.
Quand on achète quelque chose, on achète pas un objet, mais une instance de celui ci.

Pour créer une instance, on utilisera toujours l'objet "new".

# Invit de commande / Git Bash :
mkdir nomDossier = créer un dossier

rmdir nomDossier = supprimer un dossier

code . = ouvre vscode dans le bon dossier

vscode ctrl + % = ouvre un nouveau terminal

# Git Bash
**touch** permet de créer un fichier

Ex : **touch** intro.js = créera un fichier intro.js 

ls = liste de tous les fichiers situés dans le dossier dans lequel on se trouve

La commande node intro permet d'exécuter le fichier dans le terminal

# Node utilise naturellement les choses de manière async

Pour lui faire utiliser de manière sync. il faudra lui préciser.


# Qu'est-ce qu'un URL

## Décomposition d'un URL : 
https://maif.fr/assurance

- Le protocole : https://
- Le domaine : 13.107.246.42
- port : 3000
- ressource : /assurance (=> endpoint)

Domaine de 1er niveau : tout ce qui est après le . (.fr, .com, etc.)

Domaine de 2nd niveau : ?

http : L'HyperText Transfer Protocol

Chiffrer, déchiffrer

On ne peut pas décrypter quelque chose, quelque chose de crypté est comme "haché"

Quand on utilise le protocole HTTP, on utilise les objets request et response

# La gestion des fichiers

Un buffer : ressort notre fichier en octet et non en string

Créer un dossier : 

Créer un fichier :
 const makeFile = () => {
     fs.writeFile(
         './monDossier/monFichier.txt',
         'ce fichier est écrit avec node js.',
         (err) => err ? console.log(err) : console.log('le fichier à bien été créé')
     )
 }
Créer un fichier et un dossier en même temps : 

Savoir gérer création, suppression de dossiers/ fichiers