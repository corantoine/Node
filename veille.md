# Javascript SSR

- Server Side Rendering :
    - Le rendu côté serveur

- Le SSR permet un temps d'affichage plus rapide, car il n'y a pas besoin d'attendre le téléchargement et l'exécution du JS.
La récupération des données se fait côté serveur et non côté client : peut améliorer la vitesse de connexion à la BDD

- Meilleur référencement : Les robots des moteurs de recherche verront directement la page entièrement rendue.

- Modèle mental unifié : Permet d'utiliser le même langage pour développer l'appli entière plutôt que d'alterner entre backend / frontend

# Application Programming Interface (API)
 
## - Qu'est-ce qu'une API ?

- Ensemble de fonctions et de procédures qui permettent de créer des applis.
- Bloc de code déjà prêt à être utilisé.
- Programme permettant à 2 applications distinctes de communiquer entre elles et d'échanger des données. Elle fait le lien entre des données déjà existantes et un programme indépendant.

## A quoi sert une API ? 

- Permet d'intégrer les fonctionnalités de l'API dans son appli ou site web.
- Sert d'intermédiaire entre 2 systèmes informatiques indépendants.

# Les 3 API les plus utilisées 

- TokAPI (tiktok)
- Google Search
- Deezer

_Endpoints_ : 

API partenaires
API ouvertes
API internes

# API SOAP vs API REST : 

- Les 2 définissent la manière de dvl des API

## SOAP (Simple Object Access Protocol)
- Protocole officiel géré par le W3C
- Envoi de message au forma XML
- Arrivé avant REST.
- S'assure que les programmes construits sur différentes plate-formes et langages de programmation puissent échanger des données de manière simple.
- "enveloppe", je ne peux pas mettre le message dessus.

## REST (Representational State Transfer)
- Ensemble de principes architecturaux
- Conçu pour travailler avec des composants multimédias, des fichier, etc.
Service Web défini sur les principes de REST = service Web RestFul
- Utilise des _endpoints_
- "Carte postale", pas obligé de mettre dans une enveloppe

## Différences entre les 2 : 
- Principale différence : SOAP est un protocole, REST non.
- REST est + souvent utilisé quand on expose une API publique sur internet. REST fonctionne via une interface solitaire pour accéder aux ressources.

- SOAP fonctionne via différentes interfaces. Expose les composants de la logique d'application 


## 5 principaux verbes HTTP : 

- GET : Lire, accéder à la ressource
- POST : Créer un nouvel enregistrement
- PUT : Si l'enregistrement existe, maj, sinon créer un new enregistrement. Modif totale
- PATCH : MAJ / Modifier. Modif partielle.
- DELETE : Supprimer