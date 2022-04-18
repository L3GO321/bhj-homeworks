const clickerCounter = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');

let click = 0;

image.onclick = function() {
    click += 1;
    clickerCounter.textContent = click;

    if (click % 2) {
        image.width = 150;
    } else {
        image.width = 200;
    }
}