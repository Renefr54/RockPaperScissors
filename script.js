function playground (){
    getComputerChoice();
    getPlayerChoice();

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'You win, ' + playerSelection + ' beats ' + computerSelection;
    } else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        return 'The computer wins! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return "It's a tie";
    }
}

function getComputerChoice (randomNumber){
    randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 0) {
        computerSelection = 'rock';
    } else if (randomNumber === 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
}

function getPlayerChoice() {
    playerSelection = 'rock';
}

let playerSelection ='';
let computerSelection ='';

console.log(playground())