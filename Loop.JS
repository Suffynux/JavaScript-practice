// Make a Loop to calculate all the values from 1 to the number 5 and store the result in the variable
let valuesSum = 0;
let i = 1;

while (i <= 5) {
    valuesSum += i;
    i++;
}
// console.log(valuesSum);


// 2. Write a ‘while’ loop that counts down from 5 to 1 and stores the numbers in an array named ‘countdown’.
let countdown = [];
let values = 5;

while (values > 0) {
    countdown.push(values);
    values--;
} 
// console.log(countdown);

/* 3. Write a "do while’ loop that prompts a user to enter their favorite tea type until they enter ““stop"'. Store each tea type in an array named ‘teaCollection’.*/

// Solution

/* 
let teaCollection = []
let teaType;
do {
    teaType = prompt("Please enter your favorite tea")
    if (teaType !== "stop") {
        teaCollection.push(teaType)
    } 
    
} while  ( teaType !== "stop");
 */


/*Write a "for" loop that multiplies each element in the array '[2, 4, 6] by 2 and stores the results in a new array named “multipliedNumbers.  */

/*
let arrValues = [2, 4, 6];
let multipliedNumbers = []

for (let i = 0; i < arrValues.length; i++) {
    multipliedNumbers.push(arrValues[i] * 2)   
}
console.log(multipliedNumbers);
*/



// For in Loop

// Excercise no 1 

let worldCities = { "Sydney": 10000, "Tokyo": 100, "Berlin": 100, "Paris": 100 };
let smallCities = {};
for (const city in worldCities) {
    // Check if the population is 10,000 or less
    if (worldCities[city] < 10000) {
        // Add the city to smallCities if the condition is met
        smallCities[city] = worldCities[city];
    }
}
// console.log(smallCities);

// For Each Loop








