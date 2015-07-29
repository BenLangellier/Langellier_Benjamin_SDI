//variables
//var myName = prompt("please enter your first name:");


//functions
// this is my name validation function
/*function nameValidation(firstName){

   var timesClicked = 1;

   while (firstName === ""){

   firstName = prompt("You cannot leave this blank. \n\nPlease enter your first name:");

   timesClicked++;

   if (timesClicked === 10){ //checking too see how many times the button is clicked and putting a cap on that

       console.log("ENOUGH! I dont have time for this!");

      // This breaks us out of our loop

       break;


   }

   }

   return firstName;*/

}
//function to generate random numbers

function randomNumGen(min, max) {

    var randomNum;
    //Math is an object - has properties and methods
    //Math.random() * (max - min) + min
    //Math.round
    randomNum = Math.random() * (max - min) + min;
    randomNum = Math.round(randomNum);

    return randomNum;

}

//main code

//myName = nameValidation(myName);

//console.log("You entered " + myName + ".");

randomNumGen(100, 200);
