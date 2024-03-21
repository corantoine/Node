// Pour avoir accès à express
const client = require('./connection.js');
const bodyParser = require('body-parser');
const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000;


app.use(bodyParser.json());

app.get('/jeux', (req, res)=>{
    client.query(`Select * from jeux`, (err, result)=>{
        if(!err){
            res.status(200).send(result.rows);
        } else {
            res.status(500).send(err.message)
        }
    });

})


// Pour afficher un jeu by Id

app.get('/jeux/:id', (req, res)=>{
    client.query(`SELECT * FROM jeux WHERE id=${req.params.id}`, 
    // La ligne de code du dessous est la version ternaire du if else/if else
    // (err, data)=> !err ? !data.rows? res.send('Game not found') : res.send(data.rows[0]) : res.send(err.message));
    (err,data) => {
        if (!err) {
            if (data.rows.length === 0) {
                res.status(404).send('Game not found')
            } else {
                res.status(200).send(data.rows[0])
            }
        } else {
            res.status(500).send(err.message)
        }
    });
    client.end;
})

//Pour supprimer un jeu by Id

app.delete('/jeux/:id', (req, res)=> {
    let insertQuery = `DELETE FROM jeux WHERE id=${req.params.id}`;

    client.query(insertQuery, (err, result)=>{
        if (!err) {
            if (result.rowCount === 0){
                res.status(404).send('Deletion was not found')
            } else { 
                res.status(204).send('Deletion was successful') 
            }
            } else {
                res.status(500).send(err.message)
            }
    });
    client.end;
})

app.post('/jeux', (req, res)=> {
    const jeu = req.body;
    let insertQuery = `insert into jeux(name, release_date) values('${jeu.name}', '${jeu.release_date}')`
    
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
client.connect();

app.listen(port, 'localhost', () => {
    console.log(`ex app listening on port, ${port}`)
});



// app.get('/', (req, res) => {
//   res.send('<h1> Hello, World! </h1>');
// });
 
// app.listen(port, 'localhost', () => {
//   console.log(`Server is listening at ${port}`);
// });