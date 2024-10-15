// Example 1 Solution
// Step 1 : Grab the event listener
document.getElementById("changeTextButton").
addEventListener('click', function(){
    let paragraph = (document.getElementById("myparagraph"))
    paragraph.textContent = "Paragraph is changed with the help of the DOM"
})


// example 2
document.getElementById('highlightFirstCity').
addEventListener("click", function(){
    let citieslist = (document.getElementById('citieslist'))
    let firstElement = citieslist.firstElementChild
    firstElement.classList.add("highlight")
})


// example 3
document.getElementById("changeorder").
addEventListener("click" , function(){
    let Coffetype = document.getElementById("coffeetype");
    Coffetype.textContent = "Expresso"
    Coffetype.style.backgroundColor = "red"
    Coffetype.style.padding = "5px"
})
