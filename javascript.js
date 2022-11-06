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
                console.log('Tie game! Try again...');
                break;
            } else if (computerSelection==='paper'){
                console.log('Paper beats Rock! You lose...');
                break;
            } else {
                console.log('Rock beats Scissors! You win!!!');
                break;
            }
        case 'paper':
            if(computerSelection==='rock'){
                console.log('Paper beats Rock! You win!!!');
                break;
            } else if (computerSelection==='paper'){
                console.log('Tie game! Try again...');
                break;
            } else {
                console.log('Scissors beats Paper! You lose...');
                break;
            }
        case 'scissors':
            if(computerSelection==='rock'){
                console.log('Rock beats Scissors! You lose...');
                break;
            } else if (computerSelection==='paper'){
                console.log('Scissors beats Paper! You win!!!');
                break;
            } else {
                console.log('Tie game! Try again...');
                break;
            }
    }
}
function game(){
    let playerWins = 0;
    for(let i=0;i<5;i++){
        
        let playerSelection = prompt("Rock, Paper, or Scissors! It's time to choose!");
        let computerSelection = getComputerChoice();
        
        if (playerSelection.toLowerCase() === 'rock' ||
            playerSelection.toLowerCase() === 'paper' ||
            playerSelection.toLowerCase() === 'scissors'){
                rpsLogic(playerSelection,computerSelection);
            } else {
                console.log('please choose a valid choice');
            }
    }
}

//testing
game();