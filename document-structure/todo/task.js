const taskList = document.getElementById('tasks__list');
const addButton = document.getElementById('tasks__add');
const input = document.getElementById('task__input');

const addTask = () => {
    const task = input.value;

    taskList.insertAdjacentHTML('beforeEnd', `<div class="task">
    <div class="task__title">
        ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
</div>`);

    input.value = '';
    const taskRemove = taskList.querySelector('.task:last-child .task__remove');
    taskRemove.addEventListener('click', (e) => removeTask(e));

}

const removeTask = (e) => {
    taskList.removeChild(e.target.parentNode);
}

const checkValue = () => {
    return (input.value !== '' && input.value.trim() !== '');
}

addButton.addEventListener('click', () => checkValue() && addTask());

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkValue() && addTask();
    }
});
