//require express -- needs to happen for all js files
const express = require('express');
//create router variable method router on the express object
const router = express.Router();
//bring in the data
const pokemon = require('../models/pokemon');

//rest route 1 -- index
router.get('/', (req, res) => {
    res.render('index.ejs', {
        pokemon:pokemon
    })
});

//restful route 4 -- create
router.post('/', (req, res) => {
    pokemon.push({name:req.body.name, img:req.body.img});
    res.redirect('/pokemon')
});

//restful route 3 -- new
router.get('/new', (req, res) => {
    res.render('new.ejs', {
        pokemon: pokemon,
    })
});

//restful route 5 -- edit
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: pokemon,
        id: pokemon[req.params.id]
    });
})

//rest route 7 -- delete
router.delete('/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);

    console.log(req.params.id + 'deleted')
    res.redirect('/pokemon');
});

//restful route 6 -- update
router.put('/:id', (req, res) => {

    pokemon[req.params.id] = {name: req.body.name, img: req.body.img}

    res.redirect('/pokemon')
});

//restful route 2 -- show
router.get('/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon,
        id: req.params.id
    });
});

//exports controller middleware to main server app
module.exports = router;

// //////

