// Create an array of Words
var words = ["Pie", "Steak", "Chicken", "Cake", "Fish"];
console.log(words.length)
// Choose word randomly
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
// Create underscores based on legnth of Words
var underScores = [];
var generateUnderscores = () =>{
for (var i = 0; i < randomWord.length; i++) {
    underScores.push("_");
}
return underScores;
}

console.log(underScores);
var underscoreDiv = document.getElementById("underscores");
    underscoreDiv.innerHTML=generateUnderscores().join(" ");

// Get users guess
document.onkeyup = function(event) {

// Determines which key was pressed.
    var userGuess = (event.key);
        console.log(userGuess);

// Check the user's guess against the word chosen from the array.
for (var j = 0; j < randomWord.length; j++) {
   // console.log(j);
    if(randomWord[j].toLowerCase() == userGuess.toLowerCase())
    console.log("Match");
}


// Check if Guess is Right
// If right push to right array
// If wrong push to wrong array
}