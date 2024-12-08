// let userInput = parseInt(prompt("Enter a number: "));
let humanScore = 0;
let computerScore = 0;
let round = 1;
while (round < 6) {
    console.log(" ");
    console.log(`Round: ${round}`);
    function getComputerChoice(rock, paper, scissor) {
        let computerDecision = Math.floor(Math.random() * 7);
    
        if(computerDecision === 1 || computerDecision === 3) {
            return rock = "rock";
        }
        else if(computerDecision === 2 || computerDecision === 4) {
            return paper = "paper";
        }
        else {
            return scissor = "scissor";
        }
    }
    function getHumanChoice(rock, paper, scissor) {
        let humanDecision = prompt("choose: rock, paper, scissor", "rock");
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
    function playRound(humanChoice, computerChoice) {
    
        if(humanChoice === "rock" && computerChoice === "paper") {
            lose = console.log("You lose! Paper beats Rock.");
            computerScore++;
            return lose;
        }
        else if(humanChoice === "paper" && computerChoice === "rock") {
            win = console.log("Congratulations! You win Paper beats Rock");
            humanScore++;
            return win;
        }
        else if(humanChoice === "scissor" && computerChoice === "rock") {
            lose = console.log("You lose! Rock beats Scissor.");
            computerScore++;
            return lose;
        }
        else if(humanChoice === "rock" && computerChoice === "scissor") {
            win = console.log("Congratulations! You win Rock beats Scissor");
            humanScore++
            return win;
        }
        else if(humanChoice === "paper" && computerChoice === "scissor") {
            lose = console.log("You lose! Scissor beats Paper");
            computerScore++;
            return lose;
        }
        else if(humanChoice === "scissor" && computerChoice === "paper") {
            win = console.log("Congratulations! You win Scissor beats Paper");
            humanScore++;
            return win;
        }
        else{
            return console.log("tie both are same result");
        }
    
    }
    function playGame() {
        if (humanScore > computerScore) {
            result = "Congrats You win!";
        }
        else if (humanScore < computerScore) {
            result = "You lose better luck next time!!";
        }
        else {
            result = "Tie score try again!";
        }
        console.log("");
        console.log(`Human Total Score: ${humanScore}`);
        console.log(`Computer Total Score: ${computerScore}`);
        console.log(result);
    }
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`You: ${humanSelection} \nComputer: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    round++;
}

playGame();


