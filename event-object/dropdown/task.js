const dropDown = document.querySelectorAll('.dropdown');
const content = document.querySelector('.content')

content.style.display = 'flex'
content.style.flexDirection = 'column'
content.style.alignItems = 'flex-start'

for (const elem of dropDown) {
    elem.style.display = 'inline-block'
    const dropDownList = elem.querySelector('.dropdown__list');
    const dropDownValue = elem.querySelector('.dropdown__value');

    elem.addEventListener('click', function(e) {
        e.preventDefault();
        elem.children[1].classList.toggle('dropdown__list_active')
        if (e.target.classList.contains('dropdown__link')) {
            dropDownValue.textContent = e.target.textContent;
            dropDownList.classList.remove('dropdown__list_active');
        }
    });
}
