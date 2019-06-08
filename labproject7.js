// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// DEFINING TABLE
//You work for a retail store that wants to increase sales on Tuesday and Wednesday, which are the store’s slowest sales days. Write a defining table and then a program that takes a customer’s subtotal as input, and if the subtotal is greater than $50 and today is Tuesday or Wednesday, subtract 10% from the subtotal. Your program should then compute and output the total amount due by adding sales tax of 6% to the subtotal.

//INPUT: Input subtotal
//PROCESSING: Subtotal greater than $50 and it is Tuesday or Wednesday = subtract 10% remaining = Total
           // Subtotal smaller than $50 = Multiply by 6% = Total
//OUTPUT: Display result
// day of week function
let dayOfWeek = new Date().getDay(); 
//

function getTotal () {
	//INPUT DEFINE USER INPUT
	let h = (document.getElementById('h').value);
	let subtotal = h
	
	
	//PROCESSING 10% Discount if tues/wed and more than $50
	if ( subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3) ) { 
	 total = subtotal * 0.90 ;
	}
	else if ( subtotal == "" ) {
		alert("No Subtotal entered")
	}
	else {
		 total = subtotal * 1.06
	}
	
	//OUTPUT
	document.getElementById('output').innerHTML= total.toFixed(2)
	
	
	
}