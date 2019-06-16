// DEFINING TABLE Write a defining table and program that asks user for an integer INPUT and have the program OUTPUT the SUM of all the ODD integers between 1 and then integer that the user inputted, INCLUSIVE -means include 1 and number if odd-. No set looping method  you should use, but you must use a loop from lesson to solve. 
// INPUT User inputs an integer
//PROCESSING
//OUTPUT Output the sum of all odd integers between 1 and integer-has to be inclusive-



function getTotal () {
	//INPUT 
	let n = (document.getElementById('n').value); //user input
	let total = 0; // variable program will begin to count from
	//PROCESSING FOR Loop that auto-increments from number input from user
	for(let i=1; i<=n; i++) {
		
	if((i%2)!=0) // Checks if number is odd
		{total +=i;}
	// OUTPUT Display the result
	document.getElementById('output').innerHTML= total; 
}
	
	
}