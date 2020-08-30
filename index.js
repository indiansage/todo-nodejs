
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');
require('./config/mongoose');

const app = express();

const port = 8000;

//Using JSON requests
app.use(bodyParser.json());

//Frontend
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

//Routes
app.use(router);

//Listener
app.listen(port, (err) => {
    if (err) {
        console.log('error');
    }
});
