//DEFINING TABLE
// INPUT Let user input a number
// PROCESSING see if number matches or not, count number of tries
// OUTPUT Display message if user got it right and how many times it has been tried


function numberGuessGame() {
    let message =
        "I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100.";// messages to be displayed ^
	
    let answer = 25;// Defines correct answer
    let guess;// User's input
		let attempts = 0; // User number of guesses
    do {
        guess = parseInt(prompt(message));
				attempts += 1 //adds one to each user attempt
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another integer.";
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
        }
    } while (guess != answer);
    message = guess + " is correct! "+ " It took you " + attempts +" times to get it right!";
    document.getElementById('outputDIV').innerHTML= message;
}