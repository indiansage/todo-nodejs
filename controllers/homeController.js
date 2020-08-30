const tasks = require('../models/task');

//Add task page view
const addPage = (req, res) => {
	//hard-coding categories for now, in the future category model can be created with its own properties
	let initialData = {
		categoryList: [{ name: 'Personal' }, { name: 'Work' }]
	};
	res.render('add', initialData);
};

//Pending task page view
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

//Create task response
const createTask = (req, res) => {
	tasks.create(req.body, (error) => {
		if (error) {
			console.error('Error in creating task in DB');
			return res.status(500).send();
		}
		res.status(200).send();
	});
};

//Delete task response
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

//Update task response
const updateTask = (req, res) => {
	const id = req.params.id;
	tasks.findOneAndUpdate({ _id: id }, req.body,{ useFindAndModify: false }, (error, result) => {
		if (error) {
			console.error('Error in updating task from DB');
			return;
		}
		res.send(result);
	});
};

module.exports = {
    addPage,createTask,pendingPage,deleteTask,updateTask
}
