let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }

}

function getHumanChoice() {
    let humanInput = prompt("Do you want to play Rock, Paper or Scissors?");
    let choice = humanInput.toLowerCase();

    return choice[0].toUpperCase() + choice.slice(1);
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        return console.log("You win this round! " + humanChoice + " beats " + computerChoice);
    } 
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        humanScore++;
        return console.log("You win this round! " + humanChoice + " beats " + computerChoice);
    } 
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        return console.log("You win this round! " + humanChoice + " beats " + computerChoice);
    } 
    else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore++;
        return console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
    } 
    else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore++;
        return console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
    } 
    else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore++;
        return console.log("You lose this round! " + computerChoice + " beats " + humanChoice);
    } else {
        return console.log("It's a draw! You both played: " + humanChoice);
    }
}

function playGame() {

for(let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

if(humanScore < computerScore) {
     console.log("You lost the game! Your score: " + humanScore + " Computer's score: " + computerScore);
} else if (humanScore > computerScore) {
     console.log("You won the game! Your score: " + humanScore + " Computer's score: " + computerScore);
} else {
     console.log("The game is a draw! Your score: " + humanScore + " Computer's score: " + computerScore);
}

}

playGame();