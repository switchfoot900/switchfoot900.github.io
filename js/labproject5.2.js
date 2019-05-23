// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

// DEFINING TABLE
//Your program will read the number of regular hours that an employee worked and that employee’s wage, and then compute that employee’s after tax pay. Tax is 15% of the employee’s gross pay. Your program should correctly handle real numbers. (numbers with decimals).

//INPUT: Input Total hours worked (h) and Hourly Wage (w) of Employee
//PROCESSING: Use Formula to calculate net- h*w= Gross then Gross *0.15= tax, then tax- gross = net
//OUTPUT: Display result

function getNetPay () {
	//INPUT 
	let h = parseFloat(document.getElementById('h').value);
	let w = parseFloat(document.getElementById('w').value)
	
	//PROCESSING
	let gross = h*w
	let tax = gross*.15
	let net= gross-tax
	
	//OUTPUT
    document.getElementById('output').innerHTML= net
}