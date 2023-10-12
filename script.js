
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

const button_rock = document.querySelector("#rock");
const button_paper = document.querySelector("#paper");
const button_scissors = document.querySelector("#scissors");
const computerResultText = document.querySelector("#computer_choice");
const text_wins = document.querySelector("#rounds");

button_rock.addEventListener('click', () => {
    let computerChoiceResult = getComputerChoice();
    let result = playRound("rock", computerChoiceResult);
    player_win(result, "rock", computerChoiceResult);
});

button_paper.addEventListener('click', () => {
    let computerChoiceResult = getComputerChoice();
    let result = playRound("paper", computerChoiceResult);
    player_win(result, "paper", computerChoiceResult);
});

button_scissors.addEventListener('click', () => {
    let computerChoiceResult = getComputerChoice();
    let result = playRound("scissors", computerChoiceResult);
    player_win(result, "scissors", computerChoiceResult);
});

function player_win(winLose, playerPick, computerPick){
    let result = "lose";
    if(winLose){
        wins++;
        result = "win";
    }
    computerResultText.textContent = `You ${result}! You chose ${playerPick} and the computer picked ${computerPick}`;
    text_wins.textContent = `You have won ${wins} times`;
}