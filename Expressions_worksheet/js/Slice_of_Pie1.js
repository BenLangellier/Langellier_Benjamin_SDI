//Benjamin Langellier
//SDI 1507 Section 2
//Expression Worksheet

//variables

var slicesPizza;
var people;
var totalPizzas;
var result;

//prompts

totalPizzas = prompt("How many pizzas were ordered to the party?:");
slicesPizza = prompt("How many slices are there per pizza?:");
people      = prompt("How many people showed up to this awesome party?");
result = totalPizzas * slicesPizza / people;

//Output

console.log("Each person ate " + result + " " + "slices of pizza at the party");
