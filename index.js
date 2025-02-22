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
        alert("You Lose This Round! Rock beats Scissor");
    } else if (compChoice == 1 && userChoice == 0){
        // paper vs rock
        computerScore += 1;
        alert("You Lose This Round! Paper beats Roc");
    } else if (compChoice == 2 && userChoice == 1){
        // scissors vs paper
        computerScore += 1;
        alert("You Lose This Round! Scissors beats Paper");
    } else if (userChoice == 0 && compChoice == 2){
        // rock vs scissors
        userScore += 1;
        alert("You Win This Round! Rock beats Scissors");
    } else if (userChoice == 1 && compChoice == 0){
        // paper vs rock
        userScore += 1;
        alert("You Win This Round! Paper beats Rock");
    } else if (userChoice == 2 && compChoice == 1){
        // scissors vs paper
        userScore += 1;
        alert("You Win This Round! Scissors beats Paper");
    } else if (compChoice == userChoice){
        alert("Tie!")
    }
}

function playGame() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const userChoice = button.id;
            const compChoice = getComputerChoice();
            const score = document.querySelector("#score");
            roundEval(compChoice, userChoice);
            if (userScore == 5){
                alert("Congrats you win the game!!");
                userScore = 0;
                computerScore = 0;
            } else if (computerScore == 5){
                alert("Aww, you lose. Try again.");
                userScore = 0;
                computerScore = 0;
            }
            score.textContent = "Score: " + userScore + " : " + computerScore;

        });
    });

    
}

playGame();