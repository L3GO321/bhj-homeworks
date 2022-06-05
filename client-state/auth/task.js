const signInForm = document.getElementById('signin__form')
const signInBlock = document.getElementById('signin')
const welcomeBlock = document.getElementById('welcome')
const logoutButton = document.getElementById('logout__btn')

const showWelcome = (id) => {
    signInBlock.classList.remove('signin_active');

    const useIdBlock = welcomeBlock.querySelector('#user_id');
    useIdBlock.textContent = id;
    welcomeBlock.classList.add('welcome_active');
}

const userId = localStorage.getItem('user_id');

userId && showWelcome(userId);


signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = signInForm.getAttribute('action');
    const formData = new FormData(signInForm);

    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.responseType = 'json';
    request.send(formData);

    request.onload = () => {
        const response = request.response;

        if (response.success) {
            signInForm.reset();
            localStorage.setItem('user_id', response.user_id);
            showWelcome(response.user_id);
        }
    }
})

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('user_id');

    signInBlock.classList.add('signin_active');
    welcomeBlock.classList.remove('welcome_active');
})
