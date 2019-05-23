// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// DEFINING TABLE
//Compute the volume of a cylinder in liters. Ask for the appropriate inputs and output the total volume to the screen. Your program should correctly handle real numbers (numbers with decimals).

//INPUT: Input Radius (r) and Height (h) of Cylinder
//PROCESSING: Use Formula to calculate volume- V=πr2h
//OUTPUT: Display result

function getCylinderVolume () {
	//INPUT 
	let h = parseFloat(document.getElementById('h').value);
	let r = parseFloat(document.getElementById('r').value);
	
	//PROCESSING
	let volume = Math.PI*Math.pow(r,2)*h
	
	//OUTPUT
    document.getElementById('output').innerHTML= volume
}