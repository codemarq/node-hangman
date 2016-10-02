// `word.js` should contain all of the methods which will check
// the letters guessed versus the random word selected.

// placeholder-code fragment from week-3 hangman js
function Word (letter) {

	for (var i = 0; i < guesses.length +1; i++) {
		var index = guesses.indexOf(letter);
		if (index == -1) {
			guesses.push(letter);
		}
	}		


	
}





var answerArray = [];
var guessesRemaining = 5;
var guesses = [];

function checkAnswer (letter) {
	var index = answerArray.indexOf(letter);
};