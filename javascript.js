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


    if (buttonDisabled === true){
        return;
    }
    switch(playerSelection.toLowerCase()){
        case 'rock':
            if(computerSelection==='rock'){
                resultText.textContent ='Tie game! Try again...';
                break;
            } else if (computerSelection==='paper'){
                resultText.textContent ='Paper beats Rock! You lose...';
                computerWins += 1;
                if(playerWins === 5||computerWins === 5) winState();
                break;
            } else {
                resultText.textContent ='Rock beats Scissors! You win!!!';
                playerWins += 1;
                if(playerWins === 5||computerWins === 5) winState();
                break;
            }
        case 'paper':
            if(computerSelection==='rock'){
                resultText.textContent ='Paper beats Rock! You win!!!';
                playerWins += 1;
                if(playerWins === 5||computerWins === 5) winState();
                break
            } else if (computerSelection==='paper'){
                resultText.textContent ='Tie game! Try again...';
                break;
            } else {
                resultText.textContent ='Scissors beats Paper! You lose...';
                computerWins+=1;
                if(playerWins === 5||computerWins === 5) winState();
                break;
            }
        case 'scissors':
            if(computerSelection==='rock'){
                resultText.textContent ='Rock beats Scissors! You lose...';
                computerWins+=1;
                if(playerWins === 5||computerWins === 5) winState();
                break;
            } else if (computerSelection==='paper'){
                resultText.textContent ='Scissors beats Paper! You win!!!';
                playerWins += 1;
                if(playerWins === 5||computerWins === 5) winState();
                break;
            } else {
                resultText.textContent ='Tie game! Try again...';
                break;
            }
    }
}

function winState(){
    playAgainButton.classList.toggle('hide-button');
    buttonDisabled = true;
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

const playAgain = document.querySelector('#play-again');
const playAgainButton = document.createElement('button');
playAgainButton.classList.toggle('hide-button');
playAgainButton.textContent = 'Play Again';
playAgain.appendChild(playAgainButton);



//events
let buttonDisabled = false;
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
    score.textContent = `Player Wins: ${playerWins} `+
                        `Computer Wins: ${computerWins}`;
});
scissorsButton.addEventListener('click', function(){
    let computerSelection = getComputerChoice();
    rpsLogic('scissors',computerSelection);
    score.textContent = `Player Wins: ${playerWins} `+
                        `Computer Wins: ${computerWins}`;
});

playAgainButton.addEventListener('click', function (){
    playerWins = 0;
    computerWins = 0;
    buttonDisabled = false;
    score.textContent = `Player Wins: ${playerWins} `+
                        `Computer Wins: ${computerWins}`;
    playAgainButton.classList.toggle('hide-button');
});