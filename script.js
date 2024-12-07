// let userInput = parseInt(prompt("Enter a number: "));
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(rock, paper, scissor) {
    let decision = Math.floor(Math.random() * 3);

    if (decision == 1) {
        rock = "rock";
        return rock;
    }
    else if (decision == 2) {
        paper = "paper";
        return paper;
    }
    else {
        scissor = "scissor";
        return scissor;
    }
}

function getHumanChoice(choice) {
    choice = prompt("Enter your answer: ").toLocaleLowerCase();
    return choice;
}

function playGround(humanChoice, computerChoice) {

    if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose Paper beats Rock");
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Congratulations you win! Paper beats Rock.");
    }
    else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You lose Rock beats Paper");
    }
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("Congratulations you win! Rock beats Paper.")
    }
    else if (humanChoice === "paper" && computerChoice === "scissor") {
        console.log("You lose Scissor Beats Paper");
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("Conratulations You win! Scissor beat Rock!")
    }
    else {
        console.log("Tie Please Try again!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`You: ${getHumanChoice()}\nComputer: ${getComputerChoice()}`);
playGround(humanSelection, computerSelection);