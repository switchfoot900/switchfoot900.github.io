// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// DEFINING TABLE-Write a program that helps a user choose the correct foot wear for the day’s weather. The following table shows the weather types the user may enter and what your program should output.
// INPUT Choose weather from select box
// PROCESSING After selecting from list and then clicking button, computer will choose condition that is applicable
// OUTPUT When condition is met, that condition's statement will display; button also outputs depending on user selection

function addFootwear () {
	let text = document.getElementById('weather-select').value;
	document.getElementById('myButton').innerHTML= text
		
					let feet;
		if (text=="Put on some Sandals!")
				{feet="Sandals on your feet will keep off the heat!";}
		else if (text=="Time for Galoshes!")
				{feet="Galoshes are waterproof shoes that keep feet dry.";}
		else if (text=="Whip out those Boots!")
				{feet="Some good snowproof boots will keep your feet warm."}
		else if (text=="Shoes make you cool!")
				{feet="Shoes will help your feet stay pretty warm and some nice shoes can really make you stand out!"}
	else {}
	//output
	document.getElementById('output').innerHTML= feet;
	
	
}
