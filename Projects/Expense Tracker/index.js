document.addEventListener("DOMContentLoaded" , () => {

    // Grabing all the elements in the document
    let expenseNameInput = document.getElementById("Expense-Name");
    let expenseAmountInput = document.getElementById("amount");
    let expenseList = document.getElementById("expenses");
    let totalAmountDisplay = document.getElementById("total-Amount");
    let expenseBtn = document.getElementById("expenseBtn");
    let form = document.getElementById("expense-form")
    let expenses = [];
    let totalAmount = calculateTotal();

    

    // Adding event listener to the form and then getting the value and performing the tasks on it except calculations
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload
        
        let name = expenseNameInput.value.trim();
        let amount = Number(expenseAmountInput.value.trim()); // Convert to a number
        
        if (name !== "" && !isNaN(amount)) {
            
            let newExpenses = {
                id : Date.now(),
                name: name, 
                amount: amount
            }
            
            expenses.push(newExpenses);
            savedExpensesToLocal()

            expenseAmountInput.value = "";
            expenseNameInput.value = "";
            
        } 
        




        
        


    });
    
    function calculateTotal() {
            
    }
    // For saving the Form submission data into local storage and then calling this function in our if statement in the above
    function savedExpensesToLocal() {
        localStorage.setItem(expenses , JSON.stringify(expenses))
    }
});