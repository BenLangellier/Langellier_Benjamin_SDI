//Benjamin Langellier
//SDI 1507 Section 2
//Expression Worksheet

// making sure java is connected correctly alert("Java works?");
//variables
var originalPrice;//declaring the original price variable
var discountPercent;//declaring the discount percent
var item;//declaring the variable for the item
var salesTax;//declaring the sales tax
item = prompt("What is the item that you are buying?:");//setting up the prompt for price
originalPrice   = prompt("What is the original price of your item?:");//user settting the price of the item
discountPercent = prompt("What is the discount percentage?:");//user setting the discount percent
salesTax        = prompt("What is the sales tax percentage?;");//user setting the sales tax

//checking make sure prompts work
//result variables

var calculatedPercent = originalPrice - (discountPercent/100);// calculating the amount the discount will take off
var calculatedTax = originalPrice + (salesTax/100);//finding out what the sales tax becomes
var calculatedItem = originalPrice-calculatedPercent;
var calculatedWithTax = originalPrice-calculatedPercent+calculatedTax;
//console.log(calculatedPercent + " " + calculatedTax); //fixed result variables made sure that it worked.

console.log("Your " + item + " " + "was originally $" + originalPrice + "but after a " + discountPercent + "% discount, " + "it is now $" + calculatedItem + " without tax, and $" + calculatedWithTax + " with tax.");