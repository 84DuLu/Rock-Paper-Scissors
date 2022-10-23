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

function playRound(playerSelection, computerSelection) {
    let computerChoice = computerSelection();
    let playerChoice = playerSelection();

    if (computerChoice === playerChoice) {
        console.log(`Your ${playerChoice} ties with ${computerChoice}`);
        return "both";
    } else if (playerChoice === "scissors" && computerChoice === "paper" || 
               playerChoice === "rock" && computerChoice === "scissors"  ||
               playerChoice === "paper" && computerChoice === "rock") {
        console.log(`Your ${playerChoice} beats ${computerChoice}`);
        return "player";
    } else {
        console.log(`Your ${playerChoice} is beaten by ${computerChoice}`);
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

game();