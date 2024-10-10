// Merge two arrays

let FavoritesCities = ["Berlin", "Paris", "Islamabad"]
let visitedCities = ['Rawalpindi' , 'Mirpur']

// Example of Concat for merging two arrays
let mergeCities = FavoritesCities.concat(visitedCities)

// Checking the length of the arrays using the length method
// console.log(mergeCities.length)

// Finding any specific element in the array
let citylist = ["Madina" , "Berlin" , "Abu Dhabi" , "Karachi"]
let isMadinaInList = citylist.includes("Madina")
// console.log(isMadinaInList)


// Array Tasks 
// Task 1: Array Filtering
function filterNumbers(arr) {
    const result = arr.filter((element) => {
        return typeof element === 'number' 
    });
    return result;
}

// Task 2: Array Reversal
function reverseArray(arr) {
    let result = arr.reverse()
  return result;
}

// Task 3: Find Maximum in an Array
function findMax(arr) {
    let result = Math.max(...arr)
  return result;
}

// Task 4: Remove Duplicates from an Array
function removeDuplicates(arr) {
    let uniqueValues = [...new Set(arr)]
  return uniqueValues;
}

// Task 5: Flatten a Nested Array
function flattenArray(arr) {
    return arr.flat(Infinity);
}




