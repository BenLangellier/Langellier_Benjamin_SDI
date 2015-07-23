//Benjamin Langellier
//SDI 1507 Section 2
//Conditionals Assignment

//console.log("Hello World!"); //Testing connection to the HTML page - connection works
//Your Sibling has friends over and wants to take them to an R rated movie you are figuring out if they are able to do this
//We will be recieving variables of the ages of him and his friends as well as yourself to figure out if they can go

var myAge;
var siblingsAge;
var legalAge = 18;
var friends;
var myAge = Number(prompt("How old are you?"));
var siblingsAge = Number(prompt("How old is your sibling?"));
//var friends = confirm("Are your siblings friends above the legal age? \nTrue is Okay, False is Cancel");



if(siblingsAge >= legalAge){
    console.log("Go see the movie!");
}else if(myAge >= legalAge){
    console.log("Let's go see the movie!")
}else{
    console.log("We need to grow up first...")
}

//(friends === true) ? console.log("Why are you asking me, just go to the movie.") : console.log("Yeah we need to grow up");
//wanted to show that I knew how to make the Ternary statement