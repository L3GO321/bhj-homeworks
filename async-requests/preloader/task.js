const items = document.getElementById('items');
const loader = document.querySelector('.loader');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.responseType = 'json';

xhr.send();

xhr.onload = () => {
    loader.classList.remove('loader_active');

    const valute = xhr.response.response.Valute;
    for (let key in valute) {
        items.insertAdjacentHTML('beforeend', `<div class="item">
        <div class="item__code">
            ${valute[key].CharCode}
        </div>
            <div class="item__value">
                ${valute[key].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
      </div>`);
    }
}