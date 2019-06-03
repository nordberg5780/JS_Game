// wins, losses, and ties counters
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedChoices = [];
// array of potential computer choices
var computerChoices = ["a", "b", "c", "d" , "e", "f","g","h","i","j", "k","l","m","n","o","p", "q", "r", "x", "t","g","h","i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 // references to all the html sections we want to update

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess");
var computerGuessText = document.getElementById("computerGuess");
document.onkeyup = function(event){
var userGuess = event.key;
    
    if(userGuess === 'a' || userGuess === 'b' || userGuess === 'c'|| userGuess === 'd' || userGuess === 'e' ||       userGuess === 'f' || userGuess === 'g' || userGuess === 'h' || userGuess === 'i'||userGuess === 'j' ||        userGuess === 'k' || userGuess === 'l' ||userGuess === 'm' || userGuess === 'n' || userGuess === 'o' ||       userGuess === 'p' || userGuess === 'q' || userGuess === 'r' || userGuess === 's' || userGuess === 't' ||      userGuess === 'u' || userGuess === 'v' || userGuess === 'w' || userGuess === 'x' || userGuess === 'y' ||      userGuess === 'z'){
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];  //create the variables you need only when you need them
        
        if((userGuess === computerGuess)){
            wins++;
        } else if (userGuess != computerGuess){
            return false;
        } 
        alert ("Nope")
        //updating html to refelct new variable values
        directionsText.textContent = "";
        winsText.textContent = wins;
        lossesText.textContent = losses;
        tiesText.textContent = ties;
        userGuessText.textContent = userGuess;
        computerGuessText.textContent = computerGuess;
        
    } else {
        alert("ReAd My MiNd!");
    }
}
//-------------------------------------------------------
//userGuess
//computerGuess





//..........

//userGuess

//computerGuess
