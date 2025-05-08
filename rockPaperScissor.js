
/*
getComputerChoice function:
initialize a variable randomChoice and set it to math.floor(math.random() * 3)) 
initialize a variable computerChoice and set it to empty string
if randomChoice = 0 then computerChoice is rock
else if randomChoice = 1 then computerChoice is scissor
else if randomCHoice = 2 then computerChoice is paper

return string variable

use console.log to print out what the string is 
*/

function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3)
    computerChoice = ""
    if (randomChoice == 0) {
        computerChoice = "Rock"
    }
    else if (randomChoice == 1) {
        computerChoice = "Scissor"
    }
    else if (randomChoice == 2) {
        computerChoice = "Paper"
    }

    return computerChoice 
    }

console.log(getComputerChoice())

/*
getHumanChoice function:
initialize a variable userChoice and use prompt function to get the user's choice
return variable userChoice with the user's choice of rock paper of scissors

use console.log to print out what the user's choice is
*/

/*
initialize variable humanScore and set it equal to 0
initialize variable computerScore and set it equal to 0
*/

