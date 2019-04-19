
//require express
const express = require('express');
//create variable (app is convention) to use express method in project
const app = express();
//require middleware
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
// Require our controller
const pokemonController = require('./controllers/pokemon');
//let express use middleware bodyparser - allows express to access form data
app.use(bodyParser.urlencoded({
    extended: false
}));
//let express use middleware methodOveride - interecepts methods to redirect route to delete or edit
app.use(methodOverride('_method'))
//let express use controller - middlware that we build to control routes
app.use('/pokemon', pokemonController);
//tells express which port to listen to
app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
});
