function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name : "Sufiyan" , URL : "Suffynux@gmail.com" })
        } , 3000)
    });
}


// The `async` and `await` keywords are used to handle asynchronous operations more easily in JavaScript. 
// When a function is declared with `async`, it automatically returns a Promise and allows the use of `await` within it. 
// The `await` keyword pauses the execution of the function until the Promise is resolved, letting JavaScript 
// handle other tasks in the background while waiting.

async function getData () {
    try {
        console.log("Loading data...");
        let data = await fetchData();
        console.log(data);
    } catch (error) {
       console.log("failed to load data") 
    }
}