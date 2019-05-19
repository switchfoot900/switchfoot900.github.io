// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//DEFINING TABLE
//INPUT*Type your name into applicable box*
//PROCESSING*Replace your name with the name from the scripture*
//OUTPUT*Display same scripture with your name replacing previous name*

function addName() {
//INPUT
	let name = document.getElementById('name').value;
	if (name=="") {
	name = 'Nephi';	
	}
	//PROCESSING
	
	//OUTPUT
	document.getElementById("output").innerHTML= "And it came to pass that the Lord spake unto me, saying: Blessed art thou, " + name + ", because of thy faith, for thou hast sought me diligently, with lowliness of heart.";
}