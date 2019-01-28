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

//the following stores the search history in cookies
var today = new Date();
var expicy = new Date(today.getTime() + 30 * 24 * 3600 * 1000); //plus 30 days. cookies lost after thirty days

function setCookie(name, value){ //when user press enter or clicks the search button, function called
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function storeValues(form){
	setCookie("field", form.field1.value);
	return true;
}

if(field = getCookie("field")) document.myForm.field.value = field;