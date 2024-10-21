// Function excercises

// Convert data types into different types 
// Convert String to number
/*
function stringToNumber(input) {
    const stringConverter = (input);
    return stringConverter;
}
console.log(stringToNumber("Sufiyan"));
*/

// function Excercises
function stringToNumber(input) {
    const stringConverter = Number(input) 
    if (isNaN(input)) {
        return("Not a number")
    }
    return stringConverter
}

function flipBoolean(input) {
    if (input >0) {
        return false;
    } 
    return true
}

function whatAmI(input) {
    if (typeof input === "string") {
        return "I'm a string!";
    } else if (typeof input === "number") {
        return "I'm a number!";
    }
}

function isItTruthy(input) {
    if (input > 0) {
        return ("It's truthy!")
    } else if( input == "false") {
        return ("It's falsey!")
    } else{
        return ("It's falsey!")
    }
}