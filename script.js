
function getComputerChoice(){
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toString().trim().toLowerCase();
    console.log("player choice " + playerChoice);
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
   
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log("player picked " + playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
