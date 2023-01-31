const addTaskButton = document.getElementById('tasks__add');
const inputTaskField = document.getElementById('task__input');
const taskList =  document.getElementById('tasks__list');

function addTask(){
    if (inputTaskField.value) {
        taskList.insertAdjacentHTML('beforeEnd', 
            `<div class="task"> 
                <div class="task__title">
                ${inputTaskField.value.trim()}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
    }
    inputTaskField.value = null;
}

addTaskButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    addTask();
})

taskList.addEventListener('click', (ev) => {
    ev.preventDefault();
    ev.target.parentElement.remove();
}) 
