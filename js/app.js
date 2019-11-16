// variables
let li = 0;
const newTaskForm = document.querySelector('.new-task-container form');
const tasksContainer = document.querySelector('.tasks-container ul');
// on DOM loaded
document.addEventListener('DOMContentLoaded', () => bindAddTask());