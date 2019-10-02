// Simple calculator app.

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 *
 * 1.Paste functions from Notion
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

//Use an anonymous callback function as the 2nd arguement.
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior - DONT SUBMIT
  event.preventDefault();

  console.log("submitted!");
});
