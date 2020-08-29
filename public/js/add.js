const dropdownElement = document.querySelector('.dropdown');

document.addEventListener('click', function(event) {
  const isClickInside = dropdownElement.contains(event.target);

  if (!isClickInside) {
    //the click was outside the dropdownElement, close dropdown
    dropdownElement.classList.remove('is-active');
    
  }
});

function showMenu(elem){
    if (elem.classList.contains('is-active')) {
        elem.classList.remove('is-active');
    } else {
        elem.classList.add('is-active');
    }
}
function selectCategory(elem){
    let categoryList = document.querySelectorAll('.dropdown-content .dropdown-item');
    categoryList.forEach(category => {
        if (category.classList.contains('is-active')) {
            category.classList.remove('is-active');
        }
    })
    if (!elem.classList.contains('is-active')) {
        elem.classList.add('is-active');
    }
    document.querySelector('.dropdown-text').innerHTML = elem.innerHTML;
    document.querySelector('.dropdown-text').classList.add('category-chosen');
    if(document.querySelector('.dropdown').classList.contains('invalid')){
        document.querySelector('.dropdown').classList.remove('invalid');
    }
}

const datepicker = new Datepicker(document.querySelector('.date-picker'), {format:'d M yyyy'});

function handleAddTask(){
    let invalid = false;
    const description = document.querySelector('textarea.textarea').value;
    if(!description){
        document.querySelector('textarea.textarea').classList.add('is-danger');
        invalid = true;
    }
    const category = document.querySelector('span.dropdown-text').innerHTML;
    if(category==='Select a category'){
        document.querySelector('div.dropdown').classList.add('invalid');
        invalid = true;
    }
    const dueDate = document.querySelector('input.date-picker').value;
    if(!dueDate){
        document.querySelector('input.date-picker').classList.add('is-danger');
        invalid = true;
    }

    if(!invalid){
        //POST request
        var xhr = new XMLHttpRequest();
        var url = '/add';
        //var params = `description=${description}&category=${category}&dueDate=${dueDate}`;
        xhr.open('POST', url, true);

        //Send the proper header information along with the request
        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onreadystatechange = function() {//Call a function when the state changes.
            if(xhr.readyState === 4 && xhr.status === 200) {
                window.location.href = '/pending';
            }
        }
        var data = JSON.stringify({"description": description, "category": category, "dueDate": dueDate});
        xhr.send(data);
    }
}

function disableInvalidation(elem) {
    if(elem.classList.contains('is-danger')){
        elem.classList.remove('is-danger');
    }
}