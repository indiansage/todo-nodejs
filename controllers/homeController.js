const tasks = require('../models/task');

const addPage = (req, res) => {
    let initialData = {
        categoryList:[{name:'Personal'},{name:'Work'}]
    }
    res.render('add', initialData);
};
const addNew = (req, res) => {
	console.log(req.body);
	tasks.create(req.body, (error, new_task) => {
		if (error) {
			console.log('error in creating a task!');
			return;
		}
		return;
	});
};
const pending = (req, res) => {
    tasks.find({}, function (error, task) {
        console.log(task);
		if (error) {
			console.log('There was an error in fetching the tasks from the database');
			return;
		}
		var initialData = {
			taskList: task
		};
		return res.render('pending', initialData);
	});
};

module.exports = {
    addPage,addNew,pending
}
