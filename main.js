// `main.js` will contain the logic of your app. Running it in 
// Terminal/Bash will start the game.

// The app should end when a player guesses the correct word or 
// runs out of guesses.

// placeholder-code fragment from week-3 hangman js
var checkAnswer = function (letter) {
	// check to see if guess is in answer-decrement guesses if guess not in answer
	var index = answerArray.indexOf(letter);

	if (index == -1 ) {
		guessesRemaining--;
	}

	for (var i = 0; i < answerArray.length; i++) {
		var index = answerArray.indexOf(letter);
		if (index !== -1) {
			displayedAnswer[index] = answerArray[index];
			answerArray[index] = "-";
		}
	}
}

// rename variables and check. add requires and exports to each file.