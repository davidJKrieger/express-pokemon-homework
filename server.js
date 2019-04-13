const Pokemon = require('./models/pokemon');

const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/pokemon/', function (req, res) {
    res.render('index.ejs', {
        pokemon: Pokemon
    });
});

app.get('/pokemon/:index', function (req, res) {
    res.render('show.ejs', {
        pokemon:Pokemon[req.params.index]
    });
});


app.listen(3000, () => {
    console.log("I am listening");
});