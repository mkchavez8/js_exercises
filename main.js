// Variable that holds player choice
const playerSelection = document.querySelectorAll('button');
playerSelection.forEach((button) => 
    button.addEventListener('click', () => {
        playRound(button.className);
    }));

// Variable that holds computer choice
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