
function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toString().trim().toLowerCase();
    if(playerChoice == "rock"){
        if(computerSelection == "Scissors"){
            return true;
        }
        return false;
    }
    else if(playerChoice == "paper"){
        if(computerSelection == "Rock"){
            return true;
        }
        return false;
    }
    else if(playerChoice == "scissors"){
        if(computerSelection == "Paper"){
            return true;
        }
        return false;
    }
    return false;
}

let wins = 0;

function game(){
    
    for(i =0; i<5; i++){
        let player_choice = prompt("Choose rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        let result = playRound(player_choice, computerSelection)
        let output = (result) ? 
            `Congrats! You won since you chose ${player_choice}, and the computer selected ${computerSelection}`:
            `Sorry! You lost since you chose ${player_choice}, and the computer selected ${computerSelection}`;
        console.log(output);
    }
    
}

game();
