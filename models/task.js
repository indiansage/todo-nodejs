
const mongoose = require('mongoose');

const task_schema = new mongoose.Schema({
	description: {
		type: String
	},
	category: {
		type: String
	},
	dueDate: {
		type: String
	}
});

const tasks = mongoose.model('tasks', task_schema);

module.exports = tasks;
