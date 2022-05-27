const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.responseType = 'json';

xhr.send();

xhr.onload = () => {
  const question = xhr.response.data;
  pollTitle.textContent = question.title;

  for (let i = 0; i < question.answers.length; i++) {
    pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">
    ${question.answers[i]}
  </button>`)
  }

  pollAnswers.addEventListener('click', (e) => {
    if (e.target.className === 'poll__answer') {
      alert('Спасибо, ваш голос засчитан!')
    }
  })
}