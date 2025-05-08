
/*
getComputerChoice function:
initialize a variable randomChoice and set it to math.floor(math.random() * 3)) 
initialize a variable computerChoice and set it to empty string
if randomChoice = 0 then computerChoice is rock
else if randomChoice = 1 then computerChoice is scissor
else if randomCHoice = 2 then computerChoice is paper
return string variable
*/

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (randomChoice == 0) {
        computerChoice = "rock";
    }
    else if (randomChoice == 1) {
        computerChoice = "scissors";
    }
    else if (randomChoice == 2) {
        computerChoice = "paper";
    }

    console.log("Computer Choice: " + computerChoice);
    return computerChoice; 
    }

/*
getHumanChoice function:
initialize a variable userChoice and use prompt function to get the user's choice
return variable userChoice with the user's choice of rock paper of scissors
*/

function getHumanChoice() {
    let userChoice = prompt("What do you want to play?");
    console.log("Your Choice: " + userChoice);
    return userChoice;
}


/*
playRound function: 
has two parameters: humanChoice and computerChoice
make variable humanChoiceLowerCase the users choice lower case 
make variable humanWin and set to false
make variable computerWin and set to false 
if computerChoice is rock then nest if humanChoice is rock, you tie, else if humanChoice is paper, you win, else if humanChoice is scissors, you lose
else if computerChoice is scissors then nest if humanChoice is rock, you win, else if humanChoice is paper, you lose, else if humanChoice is scissors, you tie
else if computerChoice is paper then nest if humanChoice is rock, you lose, else if humanChoice is paper, you tie, else if humanChoice is scissors, you win
*/

function playRound(humanChoice, computerChoice) {

    let humanChoiceLowerCase = humanChoice.toLowerCase();
    let humanWin = false;
    let computerWin = false;
    let resultMessage = "";

    if (computerChoice == "rock") {
        if (humanChoiceLowerCase == "rock") {
            resultMessage = "You tie!";
        }
        else if (humanChoiceLowerCase == "paper") {
            resultMessage = "You win! Paper beats rock";
            humanWin = true;
        }
        else if (humanChoiceLowerCase == "scissors") {
            resultMessage = "You lose! Rock beats scissors";
            computerWin = true;
        }
    }

    else if (computerChoice == "scissors") {
        if (humanChoiceLowerCase == "rock") {
            resultMessage = "You win! Rock beats scissors";
            humanWin = true;
        }
        else if (humanChoiceLowerCase == "paper") {
            resultMessage = "You lose! Scissors beats paper";
            computerWin = true
        }
        else if (humanChoiceLowerCase == "scissors") {
            resultMessage = "You tie!";
        }
    }

    else if (computerChoice == "paper") {
        if (humanChoiceLowerCase == "rock") {
            resultMessage = "You lose! Paper beats rock";
            computerWin = true;
        }
        else if (humanChoiceLowerCase == "paper") {
            resultMessage = "You tie";
        }
        else if (humanChoiceLowerCase == "scissors") {
            resultMessage = "You win! Scissors beats paper";
            humanWin = true;
        }
    }

    if (humanWin == true) {
        humanScore = humanScore + 1;
    }
    else if (computerWin == true) {
        computerScore = computerScore + 1;
    }

    console.log(resultMessage);
}

/*
initialize variable humanScore and set it equal to 0
initialize variable computerScore and set it equal to 0
*/
let humanScore = 0
let computerScore = 0 

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)