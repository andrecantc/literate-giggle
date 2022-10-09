
//var prompt = require('prompt-sync')();
//var i = prompt("your age:");
// if (i < 18) {
//      console.log("Child");
//  } else {
 //       console.log("Adult");
//  }

var prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("skriv ditt första nummer: "));
const num2 = parseFloat(prompt("skirv ditt andra nummer: "));
const num3 = parseFloat(prompt("skriv ditt tredje nummer: "));

const smallest = Math.min(num1, num2, num3);

console.log("Det minsta nummret är: " + smallest);
