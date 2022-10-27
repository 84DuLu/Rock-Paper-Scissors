let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;
let winner;

const startButton = document.querySelector('.start-button');
const buttons = document.querySelectorAll('.button');
const playerScoreBoard = document.querySelector('#player-score');
const computerScoreBoard = document.querySelector('#computer-score');
const info = document.querySelector('.info');
const rock = document.querySelector('#rock');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');
const clickSound = document.querySelector('#click-sound');

function getComputerChoice() {
    let numberForChoice = getRndInteger(0, 2);

    if (numberForChoice === 0) {
        return "rock";
    } else if (numberForChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerChoice() {
    let choice;
    
    do {
        choice = prompt("Rock, Paper or Scissors");
        if (choice === null) {
            continue;
        }
        choice = choice.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    
    return choice;
}

function playRound(playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        info.textContent = `Your ${playerChoice} ties with ${computerChoice}`;
        return "both";
    } else if (playerChoice === "scissors" && computerChoice === "paper" || 
               playerChoice === "rock" && computerChoice === "scissors"  ||
               playerChoice === "paper" && computerChoice === "rock") {
        info.textContent = `Your ${playerChoice} beats ${computerChoice}`;
        return "player";
    } else {
        info.textContent = `Your ${playerChoice} is beaten by ${computerChoice}`;
        return "computer";
    }
}

function game() {
    let winner;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        winner = playRound(getPlayerChoice, getComputerChoice);
        if (winner === "player") {
            playerScore += 1;   
        } else if (winner === "computer") {
            computerScore += 1;
        }
        console.log(`PLAYER  ${playerScore}  :  ${computerScore}  COMPUTER`);
    }

    if (playerScore > computerScore) {
        console.log("PLAYER WINS!!!");
    } else if (playerScore < computerScore) {
        console.log("COMPUTER WINS!!!");
    } else {
        console.log("TIE!!!");
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buttonClick(e) {
    clickSound.play();

    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    winner = playRound(playerChoice, computerChoice);
    if (winner === "player") {
        playerScore += 1;   
    } else if (winner === "computer") {
        computerScore += 1;
    }
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;

    buttons.forEach((item) => item.style.background = '#9CA3AF');
    if (winner === 'both') {
        e.target.style.background = 'linear-gradient(to right, #F78F08 50%, #0870F7 50%)';
    } else{
        e.target.style.background = '#F78F08';
        buttons.forEach((item) => {
            if (item.id === computerChoice) item.style.background = '#0870F7';
        });
    }

    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach((item) => item.removeEventListener('click', buttonClick));
        if (playerScore === 5) {   
            info.textContent = 'PLAYER WINS!';
            document.querySelector('#win-sound').play();
        } else {
            info.textContent = 'COMPUTER WINS!';
            document.querySelector('#lose-sound').play();
        }
    }
}

startButton.addEventListener('click', () => {
    clickSound.play();
    playerScore = 0;
    computerScore = 0;

    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    buttons.forEach((item) => item.style.background = '#9CA3AF');
    info.textContent = 'First one to get five points wins!';

    buttons.forEach((item) => {
        item.addEventListener('click', buttonClick);
    });
});