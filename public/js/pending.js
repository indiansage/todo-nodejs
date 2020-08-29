function deleteTask(id) {
    console.log('lkj');
    //POST request
    debugger
	var xhr = new XMLHttpRequest();
	var url = `/task/${id}`;

	xhr.open('DELETE', url, true);

	//Send the proper header information along with the request
	xhr.setRequestHeader('Content-type', 'application/json');

	xhr.onreadystatechange = function () {
		//Call a function when the state changes.
		if (xhr.readyState === 4 && xhr.status === 200) {
			//document.querySelector('.alert').classList.remove('hide');
		}
	};
	//var data = JSON.stringify({ description: description, category: category, dueDate: dueDate });
	xhr.send();
}