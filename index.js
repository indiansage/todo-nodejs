
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');
const db = require('./config/mongoose');
const tasks = require('./models/task');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(router);

//listener
app.listen(port, (err) => {
    if (err) {
        console.log('error');
    }
});
