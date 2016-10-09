// `letter.js` should control whether or not a letter appears as 
//  a "_" or as itself on-screen.

function Letter () {
	
// placeholder-code fragment from week-3 hangman js

	// declare a displayed array of underscores the length of the answer
	var displayedAnswer = [];
	var pushArray = function(array, char) {
		for (var i = 0; i < answerWord.length; i++) {
		array.push(char);
		}	
	}
pushArray(displayedAnswer, '_');
}