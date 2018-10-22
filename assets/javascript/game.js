//creat an array for computer choice
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variable needed to keep score
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 9;
var guessedLetters = [];
var computerGuess;

//make computer guess random and global in scope
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);

//function for when the user presses key and makes guess
document.onkeyup = function (event) {
    var userChoice = event.key;

    console.log(userChoice);

    
    if (guessesRemaining <= 0) {
        lossCount++;
        document.getElementById("lossCount").innerHTML = lossCount;
        console.log("You Lost!");
        alert("you are not psychic!")
        guessesRemaining = 9;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        document.getElementById("guessesRemaining").innerHTML = 9;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
    }
    if (computerChoice === userChoice) {
        winCount++;
        console.log("You won!");
        alert("You won!");
        document.getElementById("winCount").innerHTML = winCount;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        console.log(computerChoice);
        guessesRemaining = 9;
        document.getElementById("guessesRemaining").innerHTML = 9;
    } else {
        console.log("Guess again!");
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}


