// Your `game.js` file will randomly select a word for the player.

// require npm radom-words package
var radomWords = require('random-words');

var wordList = randomWords(5, {min: 4, max: 10});

// declare a working array copy of individual letters in answer
var answerWord = answer.name;
var answerArray = [];
// This sets the computer guess equal to the random.
var answer = wordList[Math.floor(Math.random() * wordList.length)];

var pushAnswer = function() {
	for (var i = 0; i < answerWord.length; i++) {
		answerArray.push(answerWord[i]);
	}
}
pushAnswer();