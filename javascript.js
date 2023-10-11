console.log ('hi');

const options = ['rock','paper','scissors']; // setup options

function getComputerChoice (){
    const choice = options [Math.floor(Math.random() * options.length)];
    return choice;
}

getComputerChoice();  // run the function

function checkWinner(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection=='rock' && computerSelection == 'scissors')||
        (playerSelection=='scissors' && computerSelection == 'paper')||
        (playerSelection == 'paper' && computerSelection == 'rock')
        )
    {
        return "Player";
    }

    else {
        return "Computer";
    }

}

function playRound(playerSelection,computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);

    if(result == 'Tie'){
        return "It's a Tie!"
    }

    else if (result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`}

    else { 
        return `Computer wins! ${computerSelection} beats ${playerSelection}`}

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));



