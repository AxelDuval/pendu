// VARIABLES
const words = ["chien", "poisson", "ascenseur", "voiture", "souris"];
let userRequest;
let userChoice;
let healthPoints = 7;
let letterPosition;
let wordFound;
let computerChoice = splitChoice(words);
let hiddenText = hideChoice();

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
}
// Compare the user choice presence in the word
 function checkLetter() {
   if (computerChoice.includes(userChoice)){
    console.log("présent") ;
    return computerChoice.indexOf(userChoice);
   }
   else {   
       return false;
   }
 }


// MENU
do {
   userRequest = prompt("- Si vous voulez jouer au jeu, tapez : j \n - Si vous voulez consulter les règles, tapez : r \n - Si vous voulez quitter, tapez : q").toLowerCase();
} while (userRequest != "j" && userRequest != "r" && userRequest != "q");

if (userRequest === "j") {
    playGame();
}
else if (userRequest === "r") {
    alert("Le but du jeu est simple : \n Deviner toute les lettres qui doivent composer un mot, \n avec un nombre limité de tentatives. \n A chaque fois que le joueur devine une lettre, \n celle-ci est affichée. \n\n Pret à jouer ?");
    playGame();
}
else {
    alert("A bientôt !")
}

// GAME LOOP
// Get the player choice    
function playGame(){
while(hiddenText.includes(" _ ") || healthPoints === 0){
   do { userChoice = prompt("Essais restants : " + healthPoints  + "\n\n " +  "Mot à deviner  : "  + hiddenText.join(" ") + "\n\n Choisissez une lettre !").toLowerCase();
      } while (userChoice.length !== 1);
    // Compare to the random word 
    for (let i = 0; i < computerChoice.length; i++) {           
    if (computerChoice[i] === userChoice) {
        hiddenText[i] = userChoice;
        }   
    }
    // lose health
    if (checkLetter() === false) {        
        healthPoints--;
    }
    // lose game
    if (healthPoints === 0){
        alert("Perdu ! Le mot était : " + computerChoice.join("")); 
        break;
    }
    // win game
    else if (hiddenText.includes(" _ ") === false) {  
        alert("Gagné ! Vous avez trouvé le mot : " + computerChoice.join(""));
    }
}
}