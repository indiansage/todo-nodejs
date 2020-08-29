const tasks = require('../models/task');

const addPage = (req, res) => {
    let initialData = {
        categoryList:[{name:'Personal'},{name:'Work'}]
    }
    res.render('add', initialData);
};
const addNewTask = (req, res) => {
	tasks.create(req.body, (error) => {
		if (error) {
			console.error('Error in creating task in DB');
			return res.status(500).send();
		}
		res.status(200).send();
	});
};

const pendingPage = (req, res) => {
    tasks.find({}, (error, tasks) => {
		if (error) {
			console.error('Error in fetching tasks from DB');
			return;
		}
		const initialData = {
			taskList: tasks
		};
		return res.render('pending', initialData);
	});
};

const deleteTask = (req, res) => {
	const id = req.params.id;
	tasks.deleteOne({ _id: id }, (error) => {
		if (error) {
			console.error('Error in deleting task from DB');
			return;
		}
		res.send();
	});
};
module.exports = {
    addPage,addNewTask,pendingPage,deleteTask
}
