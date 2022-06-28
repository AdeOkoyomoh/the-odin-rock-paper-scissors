let computerPlay = () => {
    let computerThink = Math.round(Math.random() * 3);
    return (computerThink === 0) ? 'Rock' : (computerThink === 1) ? 'Paper' : 'Scissors';
}

let capitalize = string => string.replace(string[0], string[0].toUpperCase());

let playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    return ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors')
    || (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') 
    || (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper')) ? 
    
    `You Win! ${capitalize(playerSelection)} beats ${computerSelection}` : 

    ((computerSelection === 'Rock' && playerSelection.toLowerCase() === 'scissors') 
    || (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'rock') 
    || (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'paper')) ? 
    
    `You Lose! ${computerSelection} beats ${capitalize(playerSelection)}` :

    `It's a tie! You both picked ${computerSelection}`;
}

let game = () => {
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0 ; i < 5; i++) {
        let result = playRound(prompt("What do you want to pick?"));
        console.log(result);
        if (result.includes("Win")) {
            playerScore++
        } else if (result.includes("Lose")) {
            computerScore++
        } else {
            continue
        }
        rounds++
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Your score is ${playerScore}/5`)
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! Your score is ${playerScore}/5`)
    } else {
        console.log(`It's a tie! Your score is ${playerScore}`)
    }
}