//Event Listener from Category dropdown interaction
document.addEventListener('click', function (event) {
	const dropdownElement = document.querySelector('.dropdown');
	const isClickInside = dropdownElement.contains(event.target);

	if (!isClickInside) {
		//the click was outside the dropdownElement, close dropdown
		dropdownElement.classList.remove('is-active');
	}
});
//Show/Hide Category dropdown menu
function showMenu(elem) {
	if (elem.classList.contains('is-active')) {
		elem.classList.remove('is-active');
	} else {
		elem.classList.add('is-active');
	}
}
//Select Category from dropdown menu
function selectCategory(elem) {
	let categoryList = document.querySelectorAll('.dropdown-content .dropdown-item');
	categoryList.forEach((category) => {
		if (category.classList.contains('is-active')) {
			category.classList.remove('is-active');
		}
	});
	if (!elem.classList.contains('is-active')) {
		elem.classList.add('is-active');
	}
	document.querySelector('.dropdown-text').innerHTML = elem.innerHTML;
	document.querySelector('.dropdown-text').classList.add('category-chosen');
	if (document.querySelector('.dropdown').classList.contains('invalid')) {
		document.querySelector('.dropdown').classList.remove('invalid');
	}
}
//Initialize date-picker
new Datepicker(document.querySelector('.date-picker'), { format: 'd M yyyy' });

//Validation check and create task API call
function handleAddTask() {
	let invalid = false;
	const description = document.querySelector('textarea.textarea').value;
	if (!description) {
		document.querySelector('textarea.textarea').classList.add('is-danger');
		invalid = true;
	}
	const category = document.querySelector('span.dropdown-text').innerHTML;
	if (category === 'Select a category') {
		document.querySelector('div.dropdown').classList.add('invalid');
		invalid = true;
	}
	const dueDate = document.querySelector('input.date-picker').value;
	if (!dueDate) {
		document.querySelector('input.date-picker').classList.add('is-danger');
		invalid = true;
	}

	if (!invalid) {
		var xhr = new XMLHttpRequest();
		var url = '/task';

		xhr.open('POST', url, true);
		xhr.setRequestHeader('Content-type', 'application/json');

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				document.querySelector('.alert').classList.remove('hide');
				document.querySelector('textarea.textarea').value = '';
				document.querySelector('input.date-picker').value = '';
				document.querySelector('span.dropdown-text').innerHTML = 'Select a category';
				new Datepicker(document.querySelector('.date-picker'), { format: 'd M yyyy' });
			}
		};
		var data = JSON.stringify({ description: description, category: category, dueDate: dueDate });
		xhr.send(data);
	}
}

//Remove invalid styles on typing
function disableInvalidation(elem) {
	if (elem.classList.contains('is-danger')) {
		elem.classList.remove('is-danger');
	}
}

//Hide Notification on pressing close(x)
function hideNotification() {
	document.querySelector('.alert').classList.add('hide');
}
