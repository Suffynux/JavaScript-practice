let second = 0; // Keeps track of the elapsed seconds
let interval;   // Stores the interval ID

let time = document.getElementById("time");

// Increment the seconds and update the display
function timeCounter() {
    second++;
    timeRender();
}
// Start the timer
function timeStart() {
    // Only start a new interval if one is not already running
    if (!interval) {
        interval = setInterval(timeCounter, 1000);
    }
}


// Display the formatted time as mm:ss
function timeRender() {
    let minutes = Math.floor(second / 60);  // Calculate full minutes
    let seconds = second % 60;             // Calculate remaining seconds
    time.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Stop the timer
function timeStop() {
    clearInterval(interval);
    interval = null; // Clear the interval ID to allow restarting
}

// Reset the timer
function timeReset() {
    timeStop();      // Stop the timer
    second = 0;      // Reset the seconds to zero
    time.innerHTML = "00:00"; // Reset the display
}
