//Benjamin Langellier
//SDI 1507 Section 2
//Expression Worksheet

//variables

var slicesPizza; //declaring the variable for slices of pizza
var people; // declaring the variable for amount of people
var totalPizzas; //declaring the amount of pizza ordered to the party
var result; //calculation of how many pieces of pizza each person will get

//prompts

totalPizzas = prompt("How many pizzas were ordered to the party?:"); //user puts in how many pizzas were ordered
slicesPizza = prompt("How many slices are there per pizza?:"); //user puts in how many slices each pizza has
people      = prompt("How many people showed up to this awesome party?"); //user tells how many people were at the party
result = totalPizzas * slicesPizza % people; //final calculation for the amount of pizza each person will get

//Output

console.log("Each person ate " + result + " " + "slices of pizza at the party"); //output to show user how much pizza each person will get
