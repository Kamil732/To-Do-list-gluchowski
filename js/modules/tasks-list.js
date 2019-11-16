function toggleClassBtn() {
    this.classList.toggle('btn-success');
}

function deleteTask() {
    const liToDelete = this.closest('li');
    tasksContainer.removeChild(liToDelete);
    li--;
}