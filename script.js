// let userInput = parseInt(prompt("Enter a number: "));
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(rock, paper, scissor) {
    let computerDecision = Math.floor(Math.random() * 3);

    if(computerDecision === 1) {
        rock = "rock";
    }
    else if(computerDecision === 2) {
        paper = "paper";
    }
    else {
        scissor = "scissor"
    }
}
function getHumanChoice(rock, paper, scissor) {
    let humanDecision = prompt("choose: rock, paper, scissor");
    humanDecision = humanDecision.toLocaleLowerCase();
    console.log(humanDecision);

    switch(humanDecision) {
        case "rock":
            rock = "rock";
            break;
        case "paper":
            paper = "paper";
            break;
        case "scissor":
            scissor = "scissor";
            break;
    }
}
function playRound(humanChoice, computerChoice) {
    while (humanScore < 5 && computerScore < 5) {
        console.log("hello");
        humanScore++;
        
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);