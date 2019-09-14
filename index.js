var _ =  require('lodash');
console.log(_);

var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


color1.addEventListener("input", function() {   
        console.log(color1.value);
});

color2.addEventListener("input", function() {
    console.log(color2.value);
});