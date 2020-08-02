const express = require('express');
const port = 8000;
const app = express();
const router = require('./routes');
const db = require('./config/mongoose');
const tasks = require('./models/task');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/assets`));
app.use('/', router);

app.listen(port, (err) => {
    if (err) {
        console.log('error');
    }
});

// app.get('/', (req,res) => {
//     return res.render('home');
// })
