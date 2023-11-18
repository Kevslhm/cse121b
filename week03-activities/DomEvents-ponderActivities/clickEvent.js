const buttonElement = document.getElementById("submitButton");
const inputElement = document.getElementById("inputBox");
const outputElement = document.getElementById("output");

function copyInput(event) {
    // take a look at the event!
    console.log(event);
    
    outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);


const log = document.querySelector('#log');

function logKey(e)
{
    console.log(e.target);
}
document.addEventListener("keydown", logKey);

function addstring ()
{
  outputElement.innerHTML = "check box is checked!"
}
document.getElementById('confirm').addEventListener("click", addstring);