function getComputerChoice() {
    let choice = ["rock" , "paper" , "scissors"];
    let choices = Math.floor(Math.random() * 3);
    let computerChoice = choice[choices];
    return computerChoice;
}

let computerScore = 0;
let playerScore = 0;

function playGame(playerChoice, computerSelection) {
    let message;

    if (playerChoice === computerSelection) {
        message = "This is a tie... Play again";
        return message;
    }
    
    if (playerChoice === "paper" && computerSelection === "rock" || playerChoice === "rock" && computerSelection === "scissors" || playerChoice === "scissors" && computerSelection === "paper") {
        playerScore++;
        message = "Congrats! You have won!";
        return message;
    } else {
        message = "You lose! Try harder. Don't lose next time!";
        computerScore++;
        return message;
    }
}

function runGame() {
    let count = 1;
    do {
        let computerSelection = getComputerChoice();
        console.log(computerSelection)
        let playerSelection = prompt("Please enter a choice: ");
        const playerSelect = playerSelection.toLowerCase();
        let score = playGame(playerSelect , computerSelection)
        console.log( score)
        count++
    } while (count <= 5);
   // console.log( `Your score is ${playerScore}`);
   // console.log(`You lose ${computerScore} times`)
    let winner;
    if (playerScore === computerScore ) {
        winner = "It was a tough game.. It ended in draw.";
        console.log(winner);
    } else if (playerScore > computerScore) {
        winner = " Hurray! You play really well and you won.";
        console.log(winner);
    } else {
        winner = "Oh! What a let down. May fortune favour you next time..";
        console.log(winner);
    }
   
}

runGame()