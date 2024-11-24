document.addEventListener("DOMContentLoaded", () => {
    // Grab elements in the document
    let expenseNameInput = document.getElementById("Expense-Name");
    let expenseAmountInput = document.getElementById("amount");
    let expenseList = document.getElementById("expenses");
    let totalAmountDisplay = document.getElementById("total-Amount");
    let form = document.getElementById("expense-form");

    // Load existing expenses from local storage or initialize as empty array
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Render existing data on page load
    renderExpenses();
    updateTotal();

    // Form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        let name = expenseNameInput.value.trim();
        let amount = Number(expenseAmountInput.value.trim()); // Convert to a number

        if (name !== "" && !isNaN(amount)) {
            let newExpense = {
                id: Date.now(),
                name: name,
                amount: amount,
            };

            // Add new expense to the array
            expenses.push(newExpense);

            // Save to local storage and update UI
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

            // Clear inputs
            expenseNameInput.value = "";
            expenseAmountInput.value = "";
        }
    });

    // Calculate total amount
    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    // Update total in the UI
    function updateTotal() {
        let total = calculateTotal();
        totalAmountDisplay.innerHTML = total.toFixed(2);
    }

    // Render expenses
    function renderExpenses() {
        expenseList.innerHTML = ""; // Clear existing list
        expenses.forEach((expense) => {

            let li = document.createElement("li");
            li.innerHTML = `
            <div class="bg-gray-700 px-5 py-4 rounded-lg flex justify-between items-center mt-1">
                <span class="p-2 text-white text-bold">${expense.name} - $${expense.amount}</span>
                <button 
                    data-id="${expense.id}" 
                    class="text-black ml-6 bg-white hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none hover:text-white dark:focus:ring-blue-800">
                    Delete
                </button>
            </div>`;

            expenseList.append(li);
        });
    }

    // Save expenses to local storage
    function saveExpensesToLocal() {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    // Delete expenses from local storage and from list 

    expenseList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            // Get the ID of the clicked expense
            const expenseId = parseInt(e.target.getAttribute('data-id'));
    
            // Filter the expenses array to exclude the expense with the matching ID
            expenses = expenses.filter(expense => expense.id !== expenseId);
    
            // Save the updated expenses array to local storage
            saveExpensesToLocal();
    
            // Re-render the expenses list
            renderExpenses();
    
            // Update the total amount
            updateTotal();
        }
    });
    
});

