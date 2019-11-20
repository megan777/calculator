// Simple calculator app.

/**
 * Write some pseudo code steps here.
 *
 * */

const calculator = {
  add(a, b) {
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  },

  remainder(a, b) {
    return a % b;
  }
};

//console.log(calculator.add(1, 2));

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

//Use an anonymous callback function as the 2nd argument.
form.addEventListener("submit", function(event) {
  // Prevent the default browser behavior - DON'T SUBMIT
  event.preventDefault();

  // Form inputs have a property called values.
  //To get the values of form fields...use below
  //console.log(num1.value, num2.value, select.value);

  output.textContent = calculator[select.value](num1.value, num2.value);
});
/////////////////////////////////////////////////////////////////////////////

//
//const form2 = document.form2.name.value("form2");

//function to call all other functions
function myFunctions() {
  validate(form2);
  //isNumberKey(evt);
  //WriteCookie();
  findFootage(form2);
  findOptions(form);
  findTotals(form);
}

//function to validate that the customer name and phone number have been added to the form
function validate(form2) {
  if (document.form.name.value == "") {
    //if name is blank, show error msg, and return focus to that field
    alert("Please type in the customer's name.");
    document.form.name.focus();
    return false;
  } else if (document.form.phone.value == "") {
    //if phone number is blank, show error msg, and return focus to that field
    alert("Please type in the customer's phone number.");
    document.form.phone.focus();
    return false;
  }
}

//function to calculate area
function findFootage(form) {
  document.form.TTLsqft.value =
    parseFloat(document.form.length.value) *
    parseFloat(document.form.width.value);
  document.getElementById("TTLsqft").innerHTML = " " + TTLsqft + " ";
  return true;
}

//function to calculate the cost per foot of the options selected
function findOptions(form) {
  //see if there are checkboxes

  var options = 0;

  if (form.trashY.checked) options += 3;
  if (form.subY.checked) options += 5;
  if (form.backerY.checked) options += 1;

  form.options.value = parseFloat(options.toFixed(2));

  //textbox "ttlPerFt" displays amount of  price per foot of options plus the fixed base price of 5
  form.ttlPerFt.value =
    parseFloat(options.toFixed(2)) + parseFloat(form.pricePer.value);
  return true;
}

//function to find total price = ttl square foot * ttl price per sq ft
function findTotals(form) {
  form.total.value =
    parseFloat(form.TTLsqft.value) * parseFloat(form.ttlPerFt.value);
  return true;
}

//function photo slideshow upon loading
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  //x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
