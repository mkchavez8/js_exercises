// Variable that asks for user's input
const playerSelection = prompt("Enter Selection");

const computerSelection = getComputerChoice();

// Function that returns a random answer for the computer
function getComputerChoice () {
  
const options = ['Rock', 'Paper', 'Scissors'];

let choice = Math.floor(Math.random() * options.length);

    if (choice === 0) {
        return 'Rock';
    }
    else if (choice === 1) {
        return 'Paper';
    }
    else if (choice === 2) {
        return 'Scissors';
    }
}

// Function that plays a round and returns result

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw';
    }
    else if (playerSelection == 'Rock' && computerSelection === 'Paper') {
        return 'You lose';
    }
    else if (playerSelection == 'Rock' && computerSelection === 'Scissors') {
        return 'You win';
    }
    else if (playerSelection == 'Paper' && computerSelection === 'Scissors') {
        return 'You lose';
    }
    else if (playerSelection == 'Paper' && computerSelection === 'Rock') {
        return 'You win';
    }
    else if (playerSelection == 'Scissors' && computerSelection === 'Rock') {
        return 'You lose';
    }
    else if (playerSelection == 'Scissors' && computerSelection === 'Paper') {
        return 'You win';
    }
    else if (playerSelection != 'Rock' || 'Paper' || 'Scissors') {
        return 'Enter a valid input';
    }
}

// Function that plays 5 rounds and declares a winner

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);

        if (playRound = 'You win') {
            playerScore++;
        }
        else if (playRound = 'You lose') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return 'Player wins!';
    }
    else if (playerScore < computerScore) {
        return 'Computer wins!';
    }
    else return 'No winner!';
}

console.log(game());