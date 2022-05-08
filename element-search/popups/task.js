const modalMain = document.querySelector('.modal', [0]);
console.log(modalMain)
const modalClose = document.querySelectorAll('.modal__close');
const showSuccess = document.querySelector('a.show-success');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active')

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', () => {

        modalMain.classList.remove('modal_active')
        modalSuccess.classList.remove('modal_active');
    })
}

showSuccess.addEventListener('click', () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
})

