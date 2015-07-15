//Benjamin Langellier
//SDI 1507 Section 2
//Expressions
//Calculating Body Mass Index

//alert("Java Works!"); making sure the files connected correctly!

//variables
var heightFeet;
var heightInches;
var weight;
var overallHeight;
var overallWeight;
var lastHeight;
var bMI;
heightFeet = prompt("What is your height in feet?:");
heightInches = prompt("What is your remainder of your height in inches?:");
weight = prompt("What is your weight?:");
overallHeight = (heightFeet*12)+4;
overallWeight = weight*703;
lastHeight = overallHeight*overallHeight;
bMI = overallWeight/lastHeight;
console.log("Your BMI is " + bMI);

