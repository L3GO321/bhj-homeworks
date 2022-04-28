const menuLink = document.querySelectorAll('.menu__link');

let nextElement = '';
let prevElement = '';

for (let i = 0; i < menuLink.length; i++) {
    const elem = menuLink[i];
    
    elem.addEventListener('click', (e) => {
        prevElement = nextElement;
        nextElement = e.target.nextElementSibling;
        if (nextElement) {
            e.preventDefault();
            nextElement.classList.toggle('menu_active');

            if (prevElement &&  prevElement !== nextElement) {
                prevElement.classList.remove('menu_active');
            }
        }
    })
}



