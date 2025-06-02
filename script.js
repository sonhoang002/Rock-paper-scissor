let compChoice;
let humanChoice;
let compScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        compChoice = "Rock";
    } else if (randNum === 1) {
        compChoice = "Paper";
    } else {
        compChoice = "Scissor";
    }

    return compChoice;
}

function getHumanChoice() {
    let choose = prompt("Rock(1), Paper(2), or Scissor(3) ?");
    if (parseInt(choose) === 1) {
        humanChoice = "Rock";
    } else if (parseInt(choose) === 2) {
        humanChoice = "Paper";
    } else {
        humanChoice = "Scissor";
    }

    return humanChoice;
}

function playRound(computer, human) {
    switch(computer) {
        case "Rock":
            if (human == "Rock") {
                console.log("Draw");
                break;
            } else if (human == "Paper") {
                console.log("Win");
                humanScore ++;
                break;
            } else {
                console.log("Lose");
                compScore ++;
                break;
            }
        case "Paper":
            if (human == "Rock") {
                console.log("Lose");
                compScore ++;
                break;
            } else if (human == "Paper") {
                console.log("Draw");
                break;
            } else {
                console.log("Win");
                humanScore ++;
                break;
            }
        case "Scissor":
            if (human == "Rock") {
                console.log("Win");
                humanScore ++;
                break;
            } else if (human == "Paper") {
                console.log("Lose");
                compScore ++;
                break;
            } else {
                console.log("Draw");
                break;
            }
    }

    console.log("Your pick: " + human);
    console.log("Computer pick: " + computer);
    console.log("Your score: " + humanScore + " : Computer Score: " + compScore);

}

function playGame(num) {
    let count = 0;
    while (count < num) {
        const humanSelection = getHumanChoice();
        const compSelection = getComputerChoice();
        playRound(compSelection, humanSelection);
        count ++;
    }

    if (humanScore === compScore) {
        console.log("This match end in a draw!");
    } else if (humanScore > compScore) {
        console.log("You win the match!");
    } else {
        console.log("You lose the match!");
    }
}

let time = prompt("How many times?");
playGame(parseInt(time));