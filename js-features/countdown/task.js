const startingValue = document.getElementById('timer');
let time = 3;

function updateCountdown() {
    if (time === 0) {
        alert('Вы победили в конкурсе!');
    }

    if (time === 0) {
        clearInterval(intervalID);
    }
    startingValue.textContent = `${time}`;
    time--;
}

let intervalID = setInterval(updateCountdown, 1000);