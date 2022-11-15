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
    if(playerWins===5 || computerWins === 5){
        return;
    }
    switch(playerSelection.toLowerCase()){
        case 'rock':
            if(computerSelection==='rock'){
                console.log('Tie game! Try again...');
                break;
            } else if (computerSelection==='paper'){
                console.log('Paper beats Rock! You lose...');
                computerWins += 1;
                break;
            } else {
                console.log('Rock beats Scissors! You win!!!');
                playerWins += 1;
                break;
            }
        case 'paper':
            if(computerSelection==='rock'){
                console.log('Paper beats Rock! You win!!!');
                playerWins += 1;
                break
            } else if (computerSelection==='paper'){
                console.log('Tie game! Try again...');
                break;
            } else {
                console.log('Scissors beats Paper! You lose...');
                computerWins+=1;
                break;
            }
        case 'scissors':
            if(computerSelection==='rock'){
                console.log('Rock beats Scissors! You lose...');
                computerWins+=1;
                break;
            } else if (computerSelection==='paper'){
                console.log('Scissors beats Paper! You win!!!');
                playerWins += 1;
                break;
            } else {
                console.log('Tie game! Try again...');
                break;
            }
    }
}
function game(){
    for(let i=0;i<5;i++){
        
        let playerSelection = prompt("Rock, Paper, or Scissors! It's time to choose!");
        let computerSelection = getComputerChoice();
        
        if (playerSelection.toLowerCase() === 'rock' ||
            playerSelection.toLowerCase() === 'paper' ||
            playerSelection.toLowerCase() === 'scissors'){
                rpsLogic(playerSelection,computerSelection);
            } else {
                console.log('Please enter a valid choice!');
            }
        
        if (playerWins===1){
            console.log('You have won ' + playerWins +' time!');
        } else {
            console.log('You have won ' + playerWins +' times!');
        }
    }
}


//DOM objects
const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const results = document.querySelector('#results-container');
const resultText = document.createElement('p');
const score =  document.createElement('p');
results.appendChild(resultText);
results.appendChild(score);

//events

let playerWins = 0; // player win count
let computerWins = 0;


rockButton.addEventListener('click', function () {
    let computerSelection = getComputerChoice();
    rpsLogic('rock',computerSelection);
    score.textContent = `Player Wins: ${playerWins} `+
                        `Computer Wins: ${computerWins}`;
});

paperButton.addEventListener('click', function(){
    let computerSelection = getComputerChoice();
    rpsLogic('paper',computerSelection);
});
scissorsButton.addEventListener('click', function(){
    let computerSelection = getComputerChoice();
    rpsLogic('scissors',computerSelection);
});
