function addNewTask(title) {
    li++;
    const taskLi = document.createElement('li');
    taskLi.classList.add('single-task');
    taskLi.innerHTML = prepareHTML(title);
    const toggleBtnComplete = taskLi.querySelector('.toggle-complete-btn');
    const removeTaskBtn = taskLi.querySelector('.delete-task-btn');

    toggleBtnComplete.addEventListener('click', toggleClassBtn);
    removeTaskBtn.addEventListener('click', deleteTask);

    tasksContainer.appendChild(taskLi);
}
function prepareHTML(title) {
    return `<div class="input-group">
        <span class="input-group-btn">
            <button class="btn btn-default toggle-complete-btn"><i class="fa fa-check"></i></button>
        </span>

        <input type="text" class="form-control" placeholder="Tytuł zadania..." value="${title}">

        <span class="input-group-btn">
            <button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>
        </span>
    </div>`;
}
function bindAddTask() {
    newTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = this.querySelector('input').value;
        this.querySelector('input').value = "";
        if(title && li != 15) {
            addNewTask(title);
        }
    });
}