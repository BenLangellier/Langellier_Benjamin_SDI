//Functions - Returning Values

//console.log("Hello World!"); //works
/*var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

console.log(width);
calcArea();
funcName(argument1, argument2);
function  funcName(parameter1, parameter2){
    //code the function runs
}*/

var total = calcArea(30, 20);
function calcArea(w, h){
    var area = w * h;
    return area; //function spitting the info out

}
console.log(total);