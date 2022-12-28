let playerScore = 0;
let computerScore = 0;

// Take player choice and callback playRound function
const buttons = document.querySelectorAll('button')
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
    const container = document.querySelector('.container');

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
                result = 'You lost the match';
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
                result = 'You won the match';
            }
    }
    else if (playerSelection !== 'Rock' || 'Paper' || 'Scissors') {
        result = 'Invalid input';
    }
    
    const returnResult = document.createElement('div');
    returnResult.textContent = result + ' ' + playerScore + ' - ' + computerScore;
    container.appendChild(returnResult);
    return;

}
