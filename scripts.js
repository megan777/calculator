// Simple calculator app.

/**
 * Write some pseudo code steps here.
 *
 * */



 const calc = {
   add: function add(a, b){
     return Number(a) + Number(b);
 },

 const calc = {
  add: function add(a, b){
    return Number(a) + Number(b);
},
subtract:function subtract(a, b) {
    return a - b;
},

multiply:function multiply(a, b) {
  return a * b;
},

divide: function divide(a, b) {
  return a / b;
},

remainder: function remainder(a, b) {
  return a % b;
}
 }

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

//Use an anonymous callback function as the 2nd arguement.
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior - DONT SUBMIT
  event.preventDefault();

  //console.log(event.timestamp);

  /*
   * Get the values form the input fields. Pass the arguements to the function. Display results.
   */

  console.log(add(num1.value, num2.value));

  output.textContent = add(num1.value, num2.value);

  // Form inputs have a property called values.
  //To get the values of form fields...use below
  console.log(num1.value, num2.value, select.value);
});
