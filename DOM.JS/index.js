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


// Example 4
// In this example we selected a list and tell the user which list items they clicked and then we show the number of the list items the clicked the content of that list item.
document.getElementById("teaList").
addEventListener("click" , function(value){
    alert(`You have selected ${value.target.textContent} and the you've selected number ${value.AT_TARGET}`)
})

// Example 5 