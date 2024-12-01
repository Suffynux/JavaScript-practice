/*

Asynchronous operations in JavaScript allow tasks to run in the background while the main code continues to execute, making the application more efficient, especially when dealing with time-consuming operations like API calls, reading files, or querying a database.  

*/

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);  // Simulates an asynchronous operation with 2-second delay
}

function processData() {
    console.log("Processing data...");
}

// console.log("Start fetching data...");
// fetchData(processData);  // The processData function is called once fetchData is complete
// console.log("This will log before data is fetched!");


