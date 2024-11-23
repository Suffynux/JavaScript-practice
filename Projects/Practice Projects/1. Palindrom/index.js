const Uinput = document.getElementById("userinput");
const inputBtn = document.getElementById("inputbtn");
const textDiv = document.getElementById("text");
const heading = document.getElementById("displaymessage");

// check function

function check() {
    let userText = Uinput.value.trim();
    if (userText === "") return

    // function for reversing the text 
    reverseString(userText);

    // function for display message
    displayMessage(message);

    // setting value empty once the message is displayed
    Uinput.value = "";

    
}
// function for parlindrom
function reverseString (value) {
    let reverseText = value.split('').reverse().join('');
    if (reverseText === value) {
      message = ("Text is Palindrome")
    } else {
      message =("Text is not Palindrome");
    }

  }
function displayMessage(message) {
    heading.textContent = message;
}
  