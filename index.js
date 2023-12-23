function getComputerChoice() {
    choice = ["rock","paper","scissors"];
    choices = Math.floor(Math.random() * 3);
    return choice[choices];
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    const playerSelection = prompt("Please enter a choice: ");
    let playerSelect = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    function playRound(playerSelection, computerSelection) {
        if (playerSelect === "rock" && computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (playerSelect === "paper" && computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (playerSelect === "paper" && computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else if (playerSelect === "scissors" && computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (playerSelect === "rock" && computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (playerSelect === "scissors" && computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "Draw play again";
        }
    }
     
    let count = 0;
    while (count <= 5){
        if (playRound() === "You Win! Paper beats Rock" || "You Win! Scissors beats Paper" || "You Win! Rock beats Scissors") {
                return `Your score is ${playerScore += 1}`;
        } else if ( playRound() === "You Win! Rock beats Scissors" || "You Lose! Scissors beats Paper" || "You Lose! Paper beats Rock") {
                return `Computer's score is ${computerScore += 1}`;
        }
        playRound();
    }

}

console.log(game());
