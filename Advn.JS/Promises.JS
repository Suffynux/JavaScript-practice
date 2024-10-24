/*

function fetchData() {
    return new Promise((Resolve, reject) => {
        setTimeout(() => {
            if (Resolve){
                console.log("Fetching data");
            }
            else{
                reject("Fetching data")
            }
        }, 3000)
    })
}
fetchData()
.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})


*/


// Example 
/*
Write three functions (fetchUserData, fetchPosts, and fetchComments) that return promises.
Each function should resolve with a message after a random delay (using setTimeout).
Use Promise.all() to run all these functions at the same time and log the results when all promises are resolved.
Implement error handling in case one of the promises fails.
*/

function fetchUserData() {

    // Always using two parameters in the return with the new and promise Methods and then use the timout function

    return new Promise(( resolve, reject ) => {
        setTimeout ( () => {
            const success = true;
            if(success) {
                resolve("Fetching user data")
            }
            else if(error) {
                reject("Error fetching user data")
            }
        } ,4000 )
    })
}
fetchUserData().
then ((Data) => {
    console.log(Data);
})
.catch((Error) => {
    console.log(Error);
})

// Second Functions for posts 
function fetchPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;

            if (success) {
                resolve("post successfully")
            } else {
                reject("post failed")
            }

        } , 5000)
    })
}
fetchPost().
then((postSuccess) => {
    console.log(postSuccess)
}).
catch ((errorPost) => {
    console.error(errorPost)
})



// Third Functions for Comments
function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;

            if (success) {
                resolve("comment successfully")
            } else {
                reject("comment failed")
            }

        } , 5000)
    })
}
fetchComments().
then((CommentSuccess) => {
    console.log(CommentSuccess)
}).
catch ((CommentFailed) => {
    console.error(CommentFailed)
})



// Using Promise all to display the results after resolving all the promises

Promise.all([fetchUserData(), fetchPost(), fetchComments()])
    .then((results) => {
        // This will log an array of results if all promises resolve
        console.log("All promises resolved successfully:", results);
    })
    .catch((error) => {
        // If any promise fails, this will catch the error
        console.error("One of the promises failed:", error);
    });
