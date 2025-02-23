// Initialize list of possible options
let options = ["rock", "paper", "scissors"];

let computerScore = 0;
let userScore = 0;

const p = document.getElementById("messages");
const roundMessage = document.getElementById("roundMessage");


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
        p.textContent = "You Lose This Round! Rock Beats Scissors";
    } else if (compChoice == 1 && userChoice == 0){
        // paper vs rock
        computerScore += 1;
        p.textContent = "You Lose This Round! Paper Beats Rock";
    } else if (compChoice == 2 && userChoice == 1){
        // scissors vs paper
        computerScore += 1;
        p.textContent = "You Lose This Round! Scissors Beats Paper";
    } else if (userChoice == 0 && compChoice == 2){
        // rock vs scissors
        userScore += 1;
        p.textContent = "You Win This Round! Rock Beats Scissors";
    } else if (userChoice == 1 && compChoice == 0){
        // paper vs rock
        userScore += 1;
        p.textContent = "You Win This Round! Paper Beats Rock";
    } else if (userChoice == 2 && compChoice == 1){
        // scissors vs paper
        userScore += 1;
        p.textContent = "You Win This Round! Scissors Beats Paper";
    } else if (compChoice == userChoice){
        p.textContent = "Tie!"
    }
}

function playGame() {
    const scissors = document.getElementById("scissors");
    let isOpen = true;
    let cycleCount = 0;

    function animateScissors() {
        isOpen = !isOpen;
        scissors.src = isOpen ? "./Images/Opened_Scissors.png" : "Images/Closed_Scissors.png";
        cycleCount++;

        if (cycleCount < 4) {
            setTimeout(animateScissors, 150);
        } else {
            setTimeout(() => {
                cycleCount = 0;
                animateScissors();
            }, 1500);
            
        }
    }

    animateScissors();


    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const userChoice = button.id;
            const compChoice = getComputerChoice();
            const score = document.querySelector("#score");
            roundEval(compChoice, userChoice);

            score.textContent = userScore + " : " + computerScore;
            roundMessage.textContent = "";


            if (userScore == 5){
                roundMessage.innerHTML = "Congratulations! You Win The Game! <br>Press Any Button To Start A New Game!"
                userScore = 0;
                computerScore = 0;
                p.textContent = "";
                score.textContent = "";
            } else if (computerScore == 5){
                roundMessage.innerHTML = "Aww, You Lose! Try Again. <br>Press Any Button To Start A New Game!"
                userScore = 0;
                computerScore = 0;
                p.textContent = "";
                score.textContent = "";
            }

        });
    });

    
}

playGame();