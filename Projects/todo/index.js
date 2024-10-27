    // Grabbing the element using the DOM so we can work further on the elements
    const todoInput = document.getElementById("input-task")
    // Getting the user button so we can add event listeners
    const taskBtn = document.getElementById("add-task-btn");
    // Getting the Ul list so we can add other items when the user clicks the button
    const todoList = document.getElementById("todo-list");

    // Array for our tasks list
    let tasks = [];

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

    // Saving the tasks in the Local Storage

    function saveTasks() {
        localStorage.setItem( 'tasks', JSON.stringify(tasks));
    }