const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const getHole = (index) => document.getElementById(`hole${index}`);

const getSuccess = () => Number(dead.textContent);
const getFailed = () => Number(lost.textContent);

const playAgain = () => {
    dead.textContent = 0;
    lost.textContent = 0;
} 

for (let i = 1; i <= 9; i++) { 
    getHole(i).onclick = function({target}) {
        if (target.classList.contains('hole_has-mole')) {
            if (getSuccess() === 9) {
                alert('Вы победили!');
                playAgain();
            } else {
                dead.textContent = getSuccess() + 1;
            } 
        } else {
          if (getFailed() === 4) {
              alert('Вы проиграли!');
              playAgain();
          } else {
              lost.textContent = getFailed() + 1;
          }      
        }
    }    
}