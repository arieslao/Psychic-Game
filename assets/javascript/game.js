
// Scoreboard variables
var winCounter = 0;
var lossCounter = 0;
var guessCounter = 0;
var guessesLeftCounter = 0;
var maxGuess = 15;


// Determines which key was pressed by User
document.onkeyup = function(event) {
    var userGuess = event.key;
      console.log(userGuess);
      //get ID "lettersGuessed" from html file
      //add each letter guessed by the user 
      var newLetter = document.getElementById("lettersGuessed").appendChild(userGuess)            
} 

 
// Computer picks a letter from  the alphabet
//    - Create an Alphabet Array
var letters = ["A", "B", "C", "D", "E", "F", "G", "H",
 "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
 "U", "V", "W", "X", "Y", "Z"]
  console.log(letters)

// Function for Computer randomly guessing a letter from computerChoices
function compGuess(){
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerGuess);
}


// Function for resetting the game either after the user guesses correctly 
// or guesses incorreclty
function reset(){
    compGuess();
}
  
//  Increment scoreboard for win if the user 
// guesses correct & reset game
function gamePlay() { 
if(computerGuess === userGuess) {
     
    document.getElementById("wins") = "Wins = " + winCounter   //gets the winCounter
    
     //  alert user they won
     alert("BOOM! Yea Baby!");
    //  reset to start another round
    document.location.reload();
 }

 // Increment scoreboard for guesses if the user 
//  guesses incorrectly
if(computerGuess != userGuess) {
    alert("Sorry, try again!");
    guessCounter++
}


//  Increment scoreboard for loss if user 
// guesses the maxGuess allowed & reset game
if(maxGuess = guessCounter) {
    alert("Game Over!")
    lossCounter++
    reset();
}

}


// // the following closes out 
// $(document).ready(function() {   from above
// )}
}