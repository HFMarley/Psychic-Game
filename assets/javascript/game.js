var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = ""
var computerGuess;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var yourGuessesSoFar = document.getElementById("yourGuessesSoFar-text");

document.onclick = function(event) {
    var userGuess = event.key;
    if (guessesLeft === 9) {
    computerGuess = [Math.floor(Math.random() * computerChoices.length)];
    console.log();
    }
    if (userGuess !== computerGuess) {
        guessesLeft --;
        console.log(); 
    }
    if (guessesLeft === 0) {
        losses ++ && guessesLeft === 9;
        console.log(); 
    }
    if (userGuess === computerGuess) {
        wins ++ && guessesLeft === 9;
        console.log();
    }
}


