const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to DB'));

db.once('open', function () {
	console.log('Successfully connected to DB');
});