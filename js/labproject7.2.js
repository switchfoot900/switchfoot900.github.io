
// DEFINING TABLE
//Write a defining table and then a program that determines if you can sleep in or not. Your program should get all its input from your computer’s clock. On all weekdays (Monday through Friday) that are not holidays, your program should output “Get up!” On all other days (weekends and holidays), your program should output “Sleep in.” The three holidays that your program must check for are January 1 (New Year’s Day), July 4 (U.S. Independence Day), and December 25 (Christmas). You don’t need to include other holidays in your program because most other holidays do not occur on a fixed day each year

//INPUT: Automatically get date from user computer clock date
//PROCESSING: Depending on date, determine whether to sleep in or to wake up
//OUTPUT: Display resulting message depending on what day it is
//Calculate date

let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();
	
document.getElementById('todayIs').innerHTML = today;
		
//PROCESSING Determine whether to sleep in or wake up
	if ( ( month == 0 && date == 1) || (month = 6 && date == 4) || (month == 11 && date == 25) || day == 6 || day == 0) {		
message = "sleep in!"; 
}
else {
	message = "wake up!";
}
	//OUTPUT Display message to sleep in or wake up
	document.getElementById('schedule').innerHTML= message;

	
	
