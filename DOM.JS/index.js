// Example 1 Solution
// Step 1 : Grab the event listener
document.getElementById("changeTextButton").
addEventListener('click', function(){
    let paragraph = (document.getElementById("myparagraph"))
    paragraph.textContent = "Paragraph is changed with the help of the DOM"
})