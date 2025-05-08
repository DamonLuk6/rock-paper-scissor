
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
    let randomChoice = Math.floor(Math.random() * 3)
    let computerChoice = ""
    if (randomChoice == 0) {
        computerChoice = "Rock"
    }
    else if (randomChoice == 1) {
        computerChoice = "Scissors"
    }
    else if (randomChoice == 2) {
        computerChoice = "Paper"
    }

    return computerChoice 
    }

/*
getHumanChoice function:
initialize a variable userChoice and use prompt function to get the user's choice
return variable userChoice with the user's choice of rock paper of scissors
*/

function getHumanChoice() {
    let userChoice = prompt("What do you want to play?")
    return userChoice
}

/*
initialize variable humanScore and set it equal to 0
initialize variable computerScore and set it equal to 0
*/

