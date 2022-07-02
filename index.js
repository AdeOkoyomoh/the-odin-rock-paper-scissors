const computerPlay = () => {
    let computerThink = Math.round(Math.random() * 3);
    return (computerThink === 0) ? 'Rock' : (computerThink === 1) ? 'Paper' : 'Scissors';
}

const capitalize = string => string.replace(string[0], string[0].toUpperCase());

const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors')
    || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') 
    || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper')) {
        return `You Win! ${capitalize(playerSelection)} beats ${computerSelection}`;
    } else if ((computerSelection === 'Rock' && playerSelection.toLowerCase() === 'scissors') 
    || (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'rock') 
    || (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'paper')) {
        return `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}`;
    } else {
        return `It's a tie! You both picked ${computerSelection}`;
    }
}

let gameStarted = false;
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
const playerScoreBoard = document.querySelector('.player-score');
const computerScoreBoard = document.querySelector('.computer-score');
const gameAnnouncer = document.querySelector('.announcer');

const startGame = () => {
    if (!gameStarted) {
        gameStarted = true;
        game();
        playerScoreBoard.textContent = `0`;
        computerScoreBoard.textContent = `0`;
    } return;
}

const game = (selection) => {
    if (gameStarted && rounds < 5) {
            result = playRound(selection);
            if (result.includes("Win")) {
                playerScore++
                playerScoreBoard.textContent = `${playerScore}`;
                gameAnnouncer.textContent = `${result}`;
            } else if (result.includes("Lose")) {
                computerScore++;
                computerScoreBoard.textContent = `${computerScore}`;
                gameAnnouncer.textContent = `${result}`;
            } else {
                gameAnnouncer.textContent = `It's a tie!`;
            }
            rounds++;
    } else {
        rounds = 0;
        gameStarted = false;
        playerScore = 0;
        computerScore = 0;
    }

    if (playerScore > computerScore && rounds === 5) {
        gameAnnouncer.textContent = `You win the game! Your score is ${playerScore}/5. Click any button to play again`;
    } else if (playerScore < computerScore && rounds === 5) {
        gameAnnouncer.textContent = `You lose the game! Your score is ${playerScore}/5. Click any button to play again`;
    } else if (playerScore === computerScore && rounds === 5){
        gameAnnouncer.textContent = `It's a tie! Your score is ${playerScore}/5. Click any button to play again`;
    }

    gameStarted = false;
}

const rockInput = document.querySelector("body > main > div > div.inputs > button.input.rock");

rockInput.addEventListener('click', function() {
    game('rock');
});

const paperInput = document.querySelector(".paper")

paperInput.addEventListener("click", function() {
    game('paper');
})

const scissorsInput = document.querySelector(".scissors");

scissorsInput.addEventListener("click", function() {
    game('scissors');
})

const inputs = document.querySelectorAll(".input");

console.log(inputs);

inputs.forEach(input => {
    input.addEventListener('click', startGame);
});