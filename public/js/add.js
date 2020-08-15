
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
}

const datepicker = new Datepicker(document.querySelector('.date-picker'), {});