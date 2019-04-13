const Pokemon = require('./models/pokemon');

const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/pokemon', (req, res) => {
    res.send(Pokemon)
    })

app.listen(3000, () => {
    console.log("I am listening");
});