//Benjamin Langellier
//SDI 1507 Section 2
//Expressions
//Calculating Body Mass Index

//alert("Java Works!"); making sure the files connected correctly!

//variables
var heightFeet;//Declaring part of the height
var heightInches;//declaring the inches
var weight;//declaring the users weight
var overallHeight;//variable for calculating the overall height
var overallWeight;//calculating the overall weight
var lastHeight;//calculating the height in overall inches for the final calc
var bMI;// final result variable

//prompts

heightFeet = prompt("What is your height in feet?:");//user input
heightInches = prompt("What is your remainder of your height in inches?:");//user input
weight = prompt("What is your weight?:");//user input

//calculations
overallWeight = Number(weight)*703;//putting weight into what the formula calls for
overallHeight = Number(heightFeet)*12 + Number(heightInches);//calculating the height in inches for the final calculation
lastHeight = overallHeight*overallHeight;//part 2 of the formula
bMI = Number(overallWeight)/Number(lastHeight);// final part

//output
console.log(overallHeight);
console.log(lastHeight);
console.log("Your BMI is " + bMI);//users Body Mass Index

