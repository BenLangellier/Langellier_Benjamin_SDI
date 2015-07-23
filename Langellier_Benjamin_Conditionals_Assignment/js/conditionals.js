//Benjamin Langellier
//SDI 1507 Section 2
//Conditionals Assignment

//console.log("Hello World!"); //Testing connection to the HTML page - connection works
//Your Sibling has friends over and wants to take them to an R rated movie you are figuring out if they are able to do this
//We will be recieving variables of the ages of him and his friends as well as yourself to figure out if they can go
//variables and outputs and confirm
var userAge;
var siblingsAge;
var legalAge      = prompt("What is the legal age to see an R rated movie?"); // asks the user what the legal age for seeing an R rated movie is in there area
var friends;                                                                  // used in the ternary function
var userAge       = Number(prompt("How old are you?"));                       // showing my own age
var siblingsAge   = Number(prompt("How old is your sibling?"));               // asking how old the sibling is to see if they can see the movie by themself
var friends       = confirm("Are your siblings friends above the legal age? \nTrue is Okay, False is Cancel");

//conditionals

if(siblingsAge >= legalAge){
    console.log("Go see the movie!"); // Your sibling is able to go see the movie with no supervision
}else if(userAge >= legalAge){
    console.log("Let's go see the movie!"); // You will have to take your sibling to the movie
}else{
    console.log("We need to grow up first..."); // None of you are able to go see the movie
}

(friends === true) ? console.log("Why are you asking me, just go to the movie.") : console.log("Yeah we need to grow up");
//wanted to show that I knew how to make the Ternary statement