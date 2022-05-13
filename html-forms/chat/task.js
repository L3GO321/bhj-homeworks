const widgetChat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const inputChat = document.getElementById('chat-widget__input');

const botMessages = ['Добрый день!', 'Кто ты?', 'До свидания!', 'Что!?', 'Где ваша совесть!'];

widgetChat.addEventListener('click', () => {
    widgetChat.classList.add('chat-widget_active');
});

const getBotMessage = () => {
  const random = Math.round(Math.random() * (botMessages.length - 1));

  messages.innerHTML += `<div class="message">
  <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
  <div class="message__text">${botMessages[random]}</div>
  </div>`
}

inputChat.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const messageText = inputChat.value;
    messages.innerHTML += `<div class="message message_client">
    <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
    <div class="message__text">${messageText}</div>
  </div>`
  inputChat.value = '';
  getBotMessage();
  }
})
