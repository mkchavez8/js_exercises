// Variable that holds player choice
const playerSelection = getPlayerChoice();

// Variable that holds computer choice
const computerSelection = getComputerChoice();

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
    else if (
            (playerSelection === 'Rock' && computerSelection === 'Paper') || 
            (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
            (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        return 'You lose';
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) 
    {
        return 'You win';
    }
    else if (playerSelection !== 'Rock' || 'Paper' || 'Scissors') {
        return 'Invalid input';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(i = 0; i < 5; i++) {
        playRound(); {
            if (playRound(playerSelection, computerSelection) === 'You lose') {
                computerScore++;
            }
            else if (playRound(playerSelection, computerSelection) === 'You win') {
                playerScore++;
            }
        }
        console.log(playerScore, computerScore); 
    }
    if (playerScore === 5) {
        return 'Player wins';
    }
    else return 'Computer wins';
}

// Console.log stuff just to visualize
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(game());