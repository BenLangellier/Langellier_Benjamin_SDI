//Conditional Logic - Relational Operators

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; // the height of the kid with parent
//if the child is old enough print to the console " you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //you can ride
    // /code performed if condition is true
    console.log("You can ride the coaster!");

}else if(kidHeight > wParentHeight){
    //code performed if condition is false
    console.log("You can ride, but only with a parent.");
}else{
    //sorry you have growing to do
    console.log("Sorry, you've got some growing to do first.");
}