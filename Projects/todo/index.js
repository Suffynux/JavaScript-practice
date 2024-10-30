document.addEventListener('DOMContentLoaded', ()=> {
    const todoInput = document.getElementById('input-task');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks'))||[];
// tasks.foreach((task) => renderTask(task));
tasks.forEach((task )=> {
    renderTask(task)
})


addTaskButton.addEventListener('click', ()=> {
    const taskText = todoInput.value.trim()
    if (taskText === "") return;

    const newTask = {
        id : Date.now(),
        text : taskText,
        completed : false,
    };
    tasks.push(newTask);
    saveTask();
    todoInput.value = " "
    console.log(tasks)
    
})

// Rendering the tasks to show in the DOM
function renderTask(task){

}




// saving in the task in Local storage
function saveTask() {
    localStorage.setItem('tasks' ,JSON.stringify(tasks));
};

} )