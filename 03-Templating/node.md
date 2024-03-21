# npm init -y

# Pour lancer le serveur : 
npm start

# Pour installer express :
npm i express

# npm run :

# Express :

# Templating : 

# __dirname

# sendFile ('fdfd/fichier.txt', {root: __dirname})

# Codes erreurs 

100 : code d'information

200 et plus = succès
200 = response OK pour un GET
201 = response OK pour un POST

Erreur 300 et + = redirection
304 = Vous n'avez pas les permissions pour modifier donc vous êtes redirigé


Erreur 400 et + = Erreur du client HTTP
Erreur = 400 et +  (Cette ressources est innacessible)
403 = accès refusé
404 = ressource non trouvé


500 et + = Erreur côté serveur


# Fonctions middleware : 

# EJS 
Embedded JavaScript templating

Pour installer ejs : npm i ejs

View engine : un moteur de rendu


<%let title = 'Portfolio de Coralie'%>
            <h1 class="mb-1"><%= title%></h1>

# Les props 

Une propriété qui voyage d'un endroit à un autre

ex : avec "title" dans app.js que l'on a fait voyager vers home.ejs

# Étiquettes EJS

- <% Balise 'Scriptlet', pour le flux de contrôle, pas de sortie
- <%_ La balise Scriptlet 'Whitespace Slurping' supprime tous les espaces qui la précèdent
- <%= Affiche la valeur dans le modèle (échappement HTML)
- <%- Affiche la valeur non échappée dans le modèle
- <%# Balise de commentaire, pas d’exécution, pas de sortie
- <%% Affiche un '<%' littéral
- %> Balise de fin simple
- -%> Balise Trim-mode ('newline slurp'), coupe après le saut de ligne
- _%> Balise de fin 'Whitespace Slurping', supprime tous les espaces après