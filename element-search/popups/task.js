const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelector('.modal__close');
const showSuccess = document.getElementsByClassName('show-success')[0];
const modalSuccess = document.getElementById('modal_success');


modalMain.classList.add('modal_active');

modalClose.onclick = function() {
    modalMain.style.display = 'none';
}

showSuccess.onclick = function() {
    modalMain.classList.toggle('modal_active');
    modalSuccess.classList.toggle('modal_active');
}
