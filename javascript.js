function getComputerChoice(){
    let rng = Math.floor(Math.random()*3) + 1;
    
    if (rng === 1){
        return "rock";
    } else if (rng === 2){
        return "paper";
    } else {
        return "scissors";
    }
}

function rpsLogic(playerSelection,computerSelection){
    switch(playerSelection){
        case 'rock':
            if(computerSelection==='rock'){
                return 'Tie game! Try again...';
            } else if (computerSelection==='paper'){
                return 'Paper beats Rock! You lose...';
            } else {
                return 'Rock beats Scissors! You win!!!';
            }
        case 'paper':
            if(computerSelection==='rock'){
                return 'Paper beats Rock! You win!!!';
            } else if (computerSelection==='paper'){
                return 'Tie game! Try again...';
            } else {
                return 'Scissors beats Paper! You lose...';
            }
        case 'scissors':
            if(computerSelection==='rock'){
                return 'Rock beats Scissors! You lose...';
            } else if (computerSelection==='paper'){
                return 'Scissors beats Paper! You win!!!';
            } else {
                return 'Tie game! Try again...';
            }

    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(rpsLogic(playerSelection,computerSelection));