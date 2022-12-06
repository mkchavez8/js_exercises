// Variable that holds player choice
const playerSelection = getPlayerChoice();

// Variable that holds computer choice
const computerSelection = getComputerChoice();

console.log(playerSelection, computerSelection);

// Function that asks for user's input
function getPlayerChoice() {
    let input = prompt("Enter Rock, Paper, or Scissors");
    return input;
}

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
