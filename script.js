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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}