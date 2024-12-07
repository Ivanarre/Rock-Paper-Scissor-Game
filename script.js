// let userInput = parseInt(prompt("Enter a number: "));

function getComputerChoice(rock, paper, scissor) {
    let computerDecision = Math.floor(Math.random() * 3);

    if(computerDecision === 1) {
        return rock = "rock";
    }
    else if(computerDecision === 2) {
        return paper = "paper";
    }
    else {
        return scissor = "scissor";
    }
}
function getHumanChoice(rock, paper, scissor) {
    let humanDecision = prompt("choose: rock, paper, scissor");
    humanDecision = humanDecision.toLocaleLowerCase();

    switch(humanDecision) {
        case "rock":
            return rock = "rock";
        case "paper":
            return paper = "paper";
        case "scissor":
            return scissor = "scissor";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "rock" && computerChoice === "paper") {
            return console.log("You lose! Paper beats Rock.");
        }
        else if(humanChoice === "paper" && computerChoice === "rock") {
            return console.log("Congratulations! You win Paper beats Rock");
        }
        else if(humanChoice === "scissor" && computerChoice === "rock") {
            return console.log("You lose! Rock beats Scissor.");
        }
        else if(humanChoice === "rock" && computerChoice === "scissor") {
            return console.log("Congratulations! You win Rock beats Scissor");
        }
        else if(humanChoice === "paper" && computerChoice === "scissor") {
            return console.log("You lose! Scissor beats Paper");
        }
        else if(humanChoice === "scissor" && computerChoice === "paper") {
            return console.log("Congratulations! You win Scissor beats Paper");
        }
        else{
            return console.log("tie both are same result");
        }
    
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(`You: ${humanSelection} \nComputer: ${computerSelection}`);

playRound(humanSelection, computerSelection);