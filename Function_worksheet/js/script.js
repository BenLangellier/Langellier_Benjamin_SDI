//Benjamin Langellier
//Function Worksheet

//console.log("Hello World");

//Circumference of a circle
//variables

var radius = calculateCirc();


//functions

function calculateCirc(){

    radius = prompt("What is the radius of the circle?");
    circumference = radius * 2;
    console.log("The circumference of the circle is " + circumference + ".");



}
var victimWeight = 200; //victims weight in pounds
var beeSting;

function calculateBeeStings(victimWeight){
    beeSting = victimWeight * 8.666666667;
    console.log("It takes " + beeSting + " to kill this animal.");
    return beeSting;
}

calculateBeeStings(victimWeight);