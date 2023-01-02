let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button')

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

// Place each event listener (click) into the playRound function as playerSelection
buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.className);
    });
});

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
function playRound(playerSelection) {

    let computerSelection = getComputerChoice();
    let result = "";

    if (playerSelection === computerSelection) {
        result = 'Draw';
    }
    else if (
            (playerSelection === 'Rock' && computerSelection === 'Paper') || 
            (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
            (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        result = 'You lose';
        computerScore += 1;
            
            if (computerScore == 5) {
                result = 'You lost the match, refresh to play again!';
                disableButtons();
            }
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) 
    {
        result = 'You win';
        playerScore += 1;

            if (playerScore == 5) {
                result = 'You won the match, refresh to play again!';
                disableButtons();
            }
    }

    let returnResult = result + ' ' + playerScore + ' - ' + computerScore;
    document.getElementById('results').textContent = returnResult;
}