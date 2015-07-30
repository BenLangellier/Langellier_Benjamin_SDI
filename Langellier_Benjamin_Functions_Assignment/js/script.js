//Benjamin Langellier
//Functions Assignment
//SDI 1507

//variables
var lotteryChoice = prompt("Do you want to play the Florida Lottery or the Powerball Lottery?\nType in full which one you want to play."); // Checking which lottery the user wants to play


//functions

function lotteryNumbers(lottery){

   var timesClicked = 1; // setting a local variable for checking the user entry and limiting the clicks of Okay
    while (lottery === ""){
        lottery = prompt("You must enter which Lottery you want to play in correctly"); //making sure something is typed into the prompt
        timesClicked++;
        if(timesClicked === 5){ // limiting the number of times the user can just click okay
            console.log("If you didn't want to play the Lottery then why did you ask?");//Telling the user to make up their mind play the lotto or dont
            break; // making sure the code doesn't continue to run
        }
    }return lottery;

}

function floridaLottery(min, max, num) {

    if (lotteryChoice === "Florida Lottery") {// setting up the Florida Lottery choice this will contain 6 random numbers between 1 and 53 without any numbers repeating
            var floridaArray = [];
        for(var i = 0; i < num; i++);{
            var floridaNumbers = Math.random() * (max - min) + min; //setting up the random numbers for the 6 lotto numbers
            floridaArray[i] = Math.round(floridaNumbers);
        }

    }return floridaArray;
}


//main code
lotteryNumbers(lotteryChoice);
floridaNumbers = floridaLottery(1,53,5);
console.log(floridaNumbers);
