//Benjamin Langellier
//SDI 1507 Section 2
//Expression Worksheet

//variables

var shoppingArray = [105, 107, 210, 303, 45]; //declaring shopping array

//result variables

var totalShopping = shoppingArray[0] + shoppingArray[1] + shoppingArray[2] + shoppingArray[3] + shoppingArray[4]; // calculating the total for the amount of my last 5 Shopping bills
// making sure the totalShopping var worked console.log(totalShopping);
var averageShopping = totalShopping/5;
// making sure all the variables worked together correctly //console.log(averageShopping);
console.log("Your last five weeks of shopping bills are " + shoppingArray); // showing the prices used.
console.log("You have spent a total of $" + totalShopping + " " + "on groceries over 5 weeks. That is an average of $" + averageShopping + " " + "per week."  ); // connecting all the varaibles into the final form