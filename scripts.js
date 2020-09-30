// Simple calculator app

/**
 *
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

};

const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
const output = document.querySelector("output");

//Use an anonymous callback function as the 2nd argument.
form.addEventListener("submit", function(event) {
    output.textContent = calculator[select.value](num1.value, num2.value);
});

//Use an anonymous callback function as the 2nd argument.
form.addEventListener("reset", function(event) {
    output.textContent = " ";
});