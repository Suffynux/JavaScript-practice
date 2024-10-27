document.addEventListener("DOMContentLoaded", () =>{
    // Grabbing the element using the DOM so we can work further on the elements
const todoInput = document.getElementById("input-task");
// Getting the user button so we can add event listeners
const taskBtn = document.getElementById("add-task-btn");
// Getting the Ul list so we can add other items when the user clicks the button
const todoList = document.getElementById("todo-list");

// Array for our tasks list

// Calling all the tasks from the local list
const memoryTasks = localStorage.getItem("tasks");
// then converting using it the JSON.parse
let tasks = JSON.parse(memoryTasks) || [];
tasks.forEach((task )=> {
    renderTask(task)
})

taskBtn.addEventListener("click", () => {
    // Grabbing the value of the input field each time the button is clicked
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        return;
    }


    let newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    console.log(tasks); // Shows the input text value correctly
});

// Displaying the tasks in the list called as an Rendering function
function renderTask(task) {
    const createList = document.createElement("li");
    createList.setAttribute("data-id" , tasks.id) 
    // Adding the html into the list 
    createList.innerHTML = `
    <div class="flex justify-between m-2">
    <span>${task.text}</span> 
    <button class="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id="del-task-btn">
        Delete
    </button>
    </div>
    `

// Now we are putting the event listeners to the Li so when the user clicks the li then it will be marked at remove
    createList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            return
    })


    todoList.append(createList)//
}


// Saving the tasks in the Local Storage
function saveTasks() {
    localStorage.setItem( 'tasks', JSON.stringify(tasks));
}
})