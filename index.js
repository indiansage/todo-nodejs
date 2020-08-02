//import express
const express = require('express');
const app = express();

//use port 8000
const port = 8000;

//routes
const router = require('./routes');
app.use('/', router);

//database config
const db = require('./config/mongoose');

//models
const tasks = require('./models/task');

//views
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware
//for query params
app.use(express.urlencoded({ extended: true }));

//for static files
app.use(express.static('public'));

//listener
app.listen(port, (err) => {
    if (err) {
        console.log('error');
    }
});
