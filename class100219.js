const me = {
  fname: "Manva",
  lname: "Misra",
  sayHello: function() {
    return "hello";
  },

  //'this' keyword binds the scope of this method to its current object
  sayName: function() {
    return `${this.fname} ${this.lname}`;
  }
};

//console.log(fname + " " + lname);

//Template literals using "tick mark" `  `
console.log(`${fname} has a last name of: ${lname}`);

console(me.fname);

const fakeVariable = "lname";

console.log(me[fakeVAriable]);
