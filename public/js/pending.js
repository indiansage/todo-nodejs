//Delete task API call
function deleteTask(id) {

	var xhr = new XMLHttpRequest();
	var url = `/task/${id}`;

	xhr.open('DELETE', url, true);
	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.querySelector(`#task-container-${id}`).remove();
		}
	};
	xhr.send();
}

//Update task API call
function updateTask(id, description, category, dueDate) {

	let done = !document.querySelector(`#task-checkbox-${id}`).checked;
	let xhr = new XMLHttpRequest();
	let url = `/task/${id}`;

	xhr.open('PUT', url, true);
	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			document.querySelector(`#task-checkbox-${id}`).checked = done;
			let taskNameClasses = document.querySelector(`#task-container-${id} span.task-name`).classList;
			if(taskNameClasses.contains('text-strike-through')){
				taskNameClasses.remove('text-strike-through');
			}
			else{
				taskNameClasses.add('text-strike-through');
			}
		}
	};
	let data = JSON.stringify({ description, category, dueDate, done });
	xhr.send(data);
}