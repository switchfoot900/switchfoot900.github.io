// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//DEFINING TABLE
//INPUT*Type your City, State, and Zip code into the applicable boxes*
//PROCESSING*Join together all address components*
//OUTPUT*Display City, State, and Zip code in one line*

function addName() {
//INPUT
	let a = document.getElementById('part1').value;
	let b = document.getElementById('part2').value;
	let c = document.getElementById('part3').value;

		
	
	//PROCESSING
	let x = a + "," + b +" " + c ;
	//OUTPUT
	document.getElementById("output").innerHTML= x;
}