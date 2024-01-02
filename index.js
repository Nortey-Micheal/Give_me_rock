//ui
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
var playerSelection;
let message = document.querySelector(".message");
let comChoice = document.querySelector(".comp");
let playChoice = document.querySelector(".play");
const playerScoreMes = document.querySelector(".player");
const computerScoreMes = document.querySelector(".computer");
let winner = document.querySelector(".winner");
//Restart button
const btn = document.createElement("button");
btn.textContent = "Restart";
btn.style.backgroundColor = "red";
btn.style.height = "50px";
btn.style.color = "white";
btn.addEventListener("click" , restartGame)
//Rules visibility
const mainCon = document.querySelector("main .container")
const rule = document.querySelector(".rule");
const rulePara = document.querySelector("p.rulePara");
rulePara.style.display = "none";
rule.addEventListener("click" ,  () => {
    rulePara.style.display = "block";
    rule.addEventListener("click" , () => {
        rulePara.style.display = "none";
    })
})

paper.addEventListener("click" , (event) => {
    playerSelection = event.target.innerText;
    playChoice.textContent = "You chose : paper";
    checkPlay();
    return playerSelection;
})
rock.addEventListener("click" , (event) => {
    playerSelection = event.target.innerText;
    playChoice.textContent = "You chose : rock";
    checkPlay();
    return playerSelection;
})
scissors.addEventListener("click" , (event) => {
    playerSelection = event.target.innerText;
    playChoice.textContent = "You chose : scissors";
    checkPlay();
    return playerSelection;
})

//restart game 
function restartGame() {
    message.innerHTML = "";
    comChoice.textContent = "";
    playChoice.textContent = "";
    playerScoreMes.textContent = "You scored : ";
    computerScoreMes.textContent = "You lost : ";
    mainCon.removeChild(btn);
    winner.textContent = "";
    playerScore = 0;
    computerScore = 0;
}

// game play

//provides computer choice
function getComputerChoice() {
    let choice = ["rock" , "paper" , "scissors"];
    let choices = Math.floor(Math.random() * 3);
    let computerChoice = choice[choices];
    comChoice.textContent = `Computer chose : ${computerChoice}`
    return computerChoice;
}

let computerScore = 0;
let playerScore = 0;

//compares choices to decide winner of round
function playGame(playerChoice, computerSelection) {

    if (playerChoice === computerSelection) {
        message.textContent = "This is a tie... Play again";
        playerScoreMes.innerText = `You scored : ${playerScore}`
        computerScoreMes.innerText = `You lost : ${computerScore}`
        return message.textContent;
    }
    
    if (playerChoice === "paper" && computerSelection === "rock" || playerChoice === "rock" && computerSelection === "scissors" || playerChoice === "scissors" && computerSelection === "paper") {
        playerScore++;
        message.textContent = "Congrats! You have won!";
        playerScoreMes.innerText = `You scored : ${playerScore}`
        computerScoreMes.innerText = `You lost : ${computerScore}`
        return message.textContent;
    } else {
        message.textContent = "You lose! Try harder. Don't lose next time!";
        computerScore++;
        playerScoreMes.innerText = `You scored : ${playerScore}`
        computerScoreMes.innerText = `You lost : ${computerScore}`
        return message.textContent;
    }
}

// Runs game
function runGame() {
    // do {

    let computerSelection = getComputerChoice();
    const playerSelect = playerSelection.toLowerCase();
    let score = playGame(playerSelect , computerSelection);
        
 

    if (playerScore === computerScore ) {
        winner.textContent = "It was a tough game.. It ended in draw.";

    } else if (playerScore > computerScore) {
        winner.textContent = " Hurray! You play really well and you won.";

    } else {
        winner.textContent = "Oh! What a let down. May fortune favour you next time..";
    }

    // } while (playerScore <= 5 || computerScore <= 5);
    
}

// chech if any of the playerscores have reached 5 before running game
function checkPlay() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            winner.textContent = "You Won";
        } else {
            winner.textContent = "You lost";
        }
        message.textContent = "GAME OVER";
        mainCon.appendChild(btn)
    } else {
        runGame()
    }
}