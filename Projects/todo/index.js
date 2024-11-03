document.addEventListener('DOMContentLoaded', ()=> {
    const todoInput = document.getElementById('input-task');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks'))||[];
// For each loop for showing each task
tasks.forEach((task) => renderTask(task));

// Adding the logic to grab the button to add the task in the array 
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
    const li = document.createElement("li");
    li.setAttribute("data-id" , task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
            <li class="bg-gray-400 rounded-md p-3 m-3 flex justify-between items-center">
                <span>${task.text}</span>
                <button class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id="del-task-btn">
                    Delete
                </button>`

    // Add an event listener to the <li> element for handling task completion status.
    // This listener will trigger each time the user clicks on the <li> item.
    li.addEventListener("click", (e) => {

        // If the target of the click event is a <button> element, exit the function.
        if (e.target.tagName === "BUTTON") return;

        // If the task was marked as completed (true), it will now be incomplete (false), and vice versa.
        task.completed = !task.completed;

        // Apply a visual effect by blurring the <li> element to indicate that it has been completed.
        li.style.filter = "blur(25px)";

        // Call the saveTask() function to persist the current task state.
        saveTask();
    });

    // Adding the event listener to the Button of li




    todoList.append(li)
    }





// saving in the task in Local storage
function saveTask() {
    localStorage.setItem('tasks' ,JSON.stringify(tasks));
};

} )