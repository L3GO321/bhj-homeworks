const reveals = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;

    for (let i = 0; i < reveals.length; i++) {
        const rect = reveals[i].getBoundingClientRect();
        if (rect.top <= windowHeight) {
            reveals[i].classList.add('reveal_active')
        }

        if (rect.bottom <= 0 && rect.top <= 0 || rect.top > windowHeight) {
            reveals[i].classList.remove('reveal_active')
        }
    }
})
