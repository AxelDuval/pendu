// VARIABLES
// Words to guess
const words = ["chien", "poisson", "ascenseur", "voiture", "souris"];
let userChoice;

// FUNCTIONS
//Computer random choice 
function randomChoice(words) {
    return words[Math.floor(Math.random() * words.length)];
}
//Split tht computer random choice 
function splitChoice(words) {
    return randomChoice(words).split("");
}
// Create a copy of the word and hide it
function hideChoice() {
    return computerChoice.map(x => " _ ").join(" ");
}
// Store the random choice splited
let computerChoice = splitChoice(words);

// Store the hidden word
let hidenText = hideChoice();

// Compare the user choice presence in the word
 function checkLetter(userChoice) {
   return computerChoice.includes(userChoice);
 };


// Ask & Store the user choice
do {
userChoice = prompt("Choisissez une lettre !");
} while(userChoice.length !== 1)

let wordPresence = checkLetter(userChoice);



console.log(wordPresence);
console.log(computerChoice);
console.log(hidenText);
console.log(userChoice);