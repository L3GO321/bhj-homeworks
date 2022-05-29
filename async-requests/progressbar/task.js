const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (e) => {
        const loadedPart = (e.loaded / e.total).toFixed(1);
        progress.value = loadedPart;
    })
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData)
})