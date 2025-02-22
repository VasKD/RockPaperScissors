// Initialize list of possible options
let options = ["rock", "paper", "scissors"];

computerScore = 0;
userScore = 0;

function getComputerChoice(){
    // Randomly choose a number between 0 and 2 (indices of list)
    let randChoice = Math.floor(Math.random() * 3);
    // Return randomly chosen option
    return randChoice;
}

function getHumanChoice(i) { 
    // Prompt user to choose one of the options
    let choice = prompt("Choose your weapon:\n 0. Rock \n 1. Paper\n 2. Scissors");
    // Return user's choice
    return choice;
}

function roundEval(compChoice, userChoice){
    if (compChoice == 0 && userChoice == 2){
        // rock vs scissors
        computerScore += 1;
        alert("You Lose This Round! Rock beats Scissors \nScore: " + computerScore + " : " + userScore);
    } else if (compChoice == 1 && userChoice == 0){
        // paper vs rock
        computerScore += 1;
        alert("You Lose This Round! Paper beats Rock \nScore: " + computerScore + " : " + userScore);
    } else if (compChoice == 2 && userChoice == 1){
        // scissors vs paper
        computerScore += 1;
        alert("You Lose This Round! Scissors beats Paper  \nScore: " + computerScore + " : " + userScore);
    } else if (userChoice == 0 && compChoice == 2){
        // rock vs scissors
        userScore += 1;
        alert("You Win This Round! Rock beats Scissors  \nScore: " + computerScore + " : " + userScore);
    } else if (userChoice == 1 && compChoice == 0){
        // paper vs rock
        userScore += 1;
        alert("You Win This Round! Paper beats Rock  \nScore: " + computerScore + " : " + userScore);
    } else if (userChoice == 2 && compChoice == 1){
        // scissors vs paper
        userScore += 1;
        alert("You Win This Round! Scissors beats Paper  \nScore: " + computerScore + " : " + userScore);
    } else if (compChoice == userChoice){
        alert("Tie!")
    }
}

function playGame() {
    for (let i = 1; i < 6; i++) {
        const compChoice = getComputerChoice();
        const userChoice = getHumanChoice(i);
        roundEval(compChoice, userChoice);
    }

    if (userScore > computerScore){
        alert("Congrats you win the game!!")
    } else {
        alert("Aww, you lose. Try again.")
    }
}

playGame();