// VARIABLES
// Words to guess
const words = ["chien", "poisson", "ascenseur", "voiture", "souris"];
let userChoice;
let healthPoints = 7;
let letterPosition;

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
    return computerChoice.map(x => " _ "); 
    // .join(" ")
}
// Store the random choice splited
let computerChoice = splitChoice(words);

// Store the hidden word
let hiddenText = hideChoice();

// Get the number of letters in the random word
// remainLetters = hiddenText.length;


// // Compare the user choice presence in the word
//  function checkLetter() {
//    if (computerChoice.includes(userChoice)){
//     console.log("présent") ;
//     return computerChoice.indexOf(userChoice);
//    }
//    else {   
//        return false;
//    }
//  }


// The game loop

    
// Get the player choice
      
while(hiddenText.includes(" _ ") || healthPoints === 0 || guess.length !== 1){
    userChoice = prompt("Essais restants : " + healthPoints  + "\n\n " +  "Mot à deviner  : "  + hiddenText.join(" ") + "\n\n Choisissez une lettre !");

    for (let i = 0; i < computerChoice.length; i++) {                
    if (computerChoice[i] === userChoice) {
    hiddenText[i] = userChoice ;
    }

    
}}

//     if(letterPosition != false) {
//         letterPosition = checkLetter(userChoice);
//         hiddenText[letterPosition] = userChoice;
//     }

//     else {
//     // Update the game state with the guess
//     healthPoints--;
// }}
    
    
    
    // The end of the game loop
    

    // if (letterPosition != false){
    //     letterPosition = checkLetter(userChoice);
    //     hiddenText[letterPosition] = userChoice;
    // }
    //     else {
    //         healthPoints--;
    //     }



// while (healthPoints !=0 && hiddenText.includes(" _ ")) {

   


console.log("choix de l'ordinateur : " + computerChoice);
console.log("choix utilisateur : " + userChoice);
console.log("Index de la lettre : " + checkLetter());
// alert("Texte caché " + hiddenText);
