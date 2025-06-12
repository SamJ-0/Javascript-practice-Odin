const mainPage = document.querySelector(".container");
const addDiv = document.createElement("div");
addDiv.classList.add("jsContent");

const choiceElement = document.createElement("p");
const scores = document.createElement("p");
const roundResult = document.createElement("p");
const playResult = document.createElement("p");


const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");

// Keeps the score

let playerScore = 0;
let computerScore = 0;

// randomises a number between 0 and 2

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

function score() {
    if(playerScore === 5 && computerScore < 5) {
        roundResult.textContent = "Congratulations: You won the round!";
    } else if (playerScore < 5 && computerScore === 5) {
        roundResult.textContent = "Game over: The Computer won the round!";
    } else if (playerScore === 5 && computerScore === 5) {
        roundResult.textContent = "The round is a draw!"
    }

    addDiv.appendChild(roundResult);
}

function displayScore() {
        scores.textContent = "Player score: " + playerScore + " | " + " Computer score: " + computerScore;
        addDiv.appendChild(scores);
}

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);


// plays one round
function playRound(event) {

    let computerChoice = getComputerChoice();
    let playerChoice = event.target.textContent;

    choiceElement.textContent = "You chose " + playerChoice + "!";
    addDiv.appendChild(choiceElement);
 
    mainPage.appendChild(addDiv);

    if(playerChoice === "Rock" && computerChoice === "Scissors") {
        playerScore++;
        score();
        playResult.textContent = "You win this round! " + playerChoice + " beats " + computerChoice;
        displayScore();
    } 
    else if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerScore++;
        score();
        playResult.textContent = "You win this round! " + playerChoice + " beats " + computerChoice;
        displayScore();
    } 
    else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore++;
        score();
        playResult.textContent = "You win this round! " + playerChoice + " beats " + computerChoice;
        displayScore();
    } 
    else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        computerScore++;
        score(); 
        playResult.textContent = "You lose this round! " + playerChoice + " beats " + computerChoice;
        displayScore();
    } 
    else if (computerChoice === "Paper" && playerChoice === "Rock") {
        computerScore++;
        score();
        playResult.textContent = "You lose this round! " + playerChoice + " beats " + computerChoice;
        displayScore();
    } 
    else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        computerScore++;
        score();
        playResult.textContent = "You lose this round! " + playerChoice + " beats " + computerChoice;
        displayScore();
    } else { 
        score();
        playResult.textContent = "It's a draw! You both played: " + playerChoice;
        displayScore();
    }

    if(playerScore >= 5 || computerScore >= 5) {
        playResult.remove();
    } else {
        return addDiv.appendChild(playResult);
    }
}