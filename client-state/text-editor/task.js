const editor = document.getElementById('editor');

const storedName = localStorage.getItem('text');

editor.textContent = storedName;

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
});

