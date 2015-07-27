//Functions - Variable Scope

//console.log("Hello World!"); //works
var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

console.log(width);
calcArea();