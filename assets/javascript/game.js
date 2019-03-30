//Establish variables computer will choose from:
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Establish variables in game:
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = "";

//Update text in html with variables in js
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesText = document.getElementById("guesses");

//to run when user starts to press keys
document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

//for loop that the computer will loop through to choose one of the letters
for (var i = 0; i < computerChoice.length; i++) {
    console.log(computerChoice[i]);

    //once wins = 10
    //alert: you win!     
    if (userGuess == computerChoice && wins >= 9) {
        winsText.textContent = "You win!";
        alert("You won!");
        document.location.reload();
    }
    
    //computer recognizes user input = user choice, checks if user choice matches computer choice
    else if (userGuess === computerChoice) {
        //if computer choice = user choice, wins++, 
        wins++;
        console.log(wins);
        winsText.textContent = wins;
    }
    //once guesses left < 2, var losses++, 
    //alert: you lost!
    //game resets 
    else if (guessesLeft < 2) {
        guessesLeftText.textContent = "You lose!";
        alert("You lost!");
        document.location.reload();
    }

    else {
        //else guess will be displayed in guesses,
        //guessesLeft--
        losses++;
        console.log("losses " + losses);
        lossesText.textContent = losses;
        guessesLeft--;
        console.log(guessesLeft);
        guessesLeftText.textContent = "You have " + guessesLeft + " guesses left";
        guessesText.innerHTML += " " + userGuess;
    }
     
}
}
