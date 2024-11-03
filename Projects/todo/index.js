document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('input-task');
    const addTaskButton = document.getElementById('add-task-btn');
    const todoList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Show each task on load
    tasks.forEach((task) => renderTask(task));

    // Add new task on button click
    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };
        tasks.push(newTask);
        saveTask();
        renderTask(newTask);  // Render the new task immediately
        todoInput.value = "";
        console.log(tasks);
    });

    // Function to render a task in the DOM
    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        if (task.completed) li.classList.add("completed");

        // Set the inner HTML content without nesting `<li>`
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="text-white bg-teal-700 hover:bg-red-600  font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Delete
            </button>`;

        // Toggle task completion on `<li>` click
        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            if (task.completed) {
                li.style.filter = "blur(2px)";
            } else if (!task.completed) {
                li.style.filter = "blur(0px)";
            }
            saveTask();
        });


         // Add Tailwind classes to style the new task item
         li.className = "bg-gray-400 rounded-md p-3 m-3 flex justify-between items-center";



        // Delete task on button click
        li.querySelector("button").addEventListener("click", (e) => {
            e.stopPropagation();
            const taskId = parseInt(li.getAttribute("data-id")); // Convert to number for comparison
            tasks = tasks.filter(t => t.id !== taskId);
            saveTask();
            li.remove(); // Remove `<li>` element from DOM
        });

        todoList.append(li);
    }

    // Save tasks to local storage
    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
