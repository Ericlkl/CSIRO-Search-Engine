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

var search = new Array(5);
//if array value is empty add to first


function storeValues(form){
	for (var i = 0; i < search.length; i ++){
		if (typeof search[i] === 'undefined'){
			search[i] = (form.field.value);
		} else if (typeof search[search.length] !== 'undefined'){
			//move values down, push last value out of the array
			for (int x = search.length - 1; x > 0; x--){
				search[x] = search[x - 1];
			}
			search[0] = (form.field.value);
		}
	}
	return true;
}


function clearHistory(array){
	search = new Array(5);
}


// //the following stores the search history in cookies
// var today = new Date();
// var expicy = new Date(today.getTime() + 30 * 24 * 3600 * 1000); //plus 30 days. cookies lost after thirty days

// function setCookie(name, value){ //when user press enter or clicks the search button, function called
// 	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
// }

function storeValues(form){
	setCookie("field", form.field.value);
	return true;
}

// if(history1 = getCookie("history1")) document.myForm.history1.value = field;

//load history
