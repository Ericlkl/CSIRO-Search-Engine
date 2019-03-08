// the age sliders
var slider = document.getElementById("myRange");
var output = document.getElementById("demo"); //updates the value slider
output.innerHTML = slider.value;

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2"); //updates the value slider
output.innerHTML = slider2.value;

slider.oninput = function() {
output.innerHTML = this.value;
}
