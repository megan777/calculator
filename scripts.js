// Simple calculator app.

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 *
 * 3. Log the value of the select and the inputs.
 * */
function add(a, b) {
  //return Number(a) + Number(b);
}

function subtract(a, b) {
  //return a - b;
}

function multiply(a, b) {
  //return a * b;
}

function divide(a, b) {
  //return a / b;
}

function remainder(a, b) {
  //return a % b;
}

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");

//Use an anonymous callback function as the 2nd arguement.
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior - DONT SUBMIT
  event.preventDefault();
  // Form inputs have a property called values.
  console.log(num1.value, num2.value, select.value);
});
