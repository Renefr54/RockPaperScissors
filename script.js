function game() {
    
    let compScore = 0;
    let userScore = 0;

    while (compScore < 5 || userScore < 5) {
        const result = playground();
        console.log(result)
        
        if (result.includes('You win')) {
            userScore++;
        } else if (result.includes('The computer wins! ')) {
            compScore++;
        }
    }

    if (userScore === 5) {
        console.log('Congrats, you won')
    } else {
        console.log('The computer wins')
    }
    function playground (){
        getComputerChoice();
        getPlayerChoice();
    
        if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            return 'You win, ' + playerSelection + ' beats ' + computerSelection + 'The score is User: ' + (userScore + 1) + 'to Computer Score: ' + (compScore + 1);
        } else if (
            (playerSelection === 'scissors' && computerSelection === 'rock') ||
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors')
        ) {
            return 'The computer wins! ' + computerSelection + ' beats ' + playerSelection + 'The score is User: ' + (userScore + 1) + 'to Computer Score: ' + (compScore + 1);
        } else {
            return "It's a tie";
        }
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
    playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
}

console.log(game())