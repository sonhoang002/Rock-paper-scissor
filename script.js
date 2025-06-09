let compChoice;
let humanChoice;
let compScore = 0;
let humanScore = 0;

const newContainer = document.createElement('div');
newContainer.classList.add('newCont');



// Random choice for computer
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

// Create the 3 button (Rock, paper, scissor)
function createButtons() {
    const rock1 = document.createElement('button');
    const paper1 = document.createElement('button');
    const scissor1 = document.createElement('button');

    rock1.classList.add('chooseRock');
    paper1.classList.add('choosePaper');
    scissor1.classList.add('chooseScissor');

    rock1.textContent = "Rock";
    paper1.textContent = "Paper";
    scissor1.textContent = "Scissor";

    let arr = [rock1, paper1, scissor1];
    return arr;
}

// Load the button when the DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    let arr = createButtons();
    newContainer.append(arr[0], arr[1], arr[2]);
    document.body.append(newContainer, outcome, scoreContainer, paraContainer);
    // document.body.appendChild(outcome);
    // document.body.appendChild(scoreContainer);
    // document.body.appendChild(paraContainer);

    newContainer.addEventListener('click', (event) => {
        let target = event.target;
        computer = getComputerChoice();

        switch(target.className) {
            case 'chooseRock':
                human = "Rock";
                playRound(computer, human);
                break;
            case 'choosePaper':
                human = "Paper";
                playRound(computer, human);
                break;
            case 'chooseScissor':
                human = "Scissor";   
                playRound(computer, human);
                break;
        }
    });
});

// Logic of the game
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

    scores.textContent =  humanScore + " --- " + compScore;
    yourPara.textContent = "Your choice: " + human;
    compPara.textContent = "Computer Choice: " + computer;

    if (humanScore === 5) {
        outcome.style.height = "200px";
        outcome.textContent = "YOU WIN!";
        newContainer.remove();
        document.body.appendChild(resetCont);
    } else if (compScore === 5) {
        outcome.style.height = "200px";
        outcome.textContent = "YOU LOSE!";
        newContainer.remove();
        document.body.appendChild(resetCont);
    }
}
// Show Winner
const outcome = document.createElement('div');
outcome.classList.add('outcome');

// Show current score
const scoreContainer = document.createElement('div');
scoreContainer.classList.add('scoreCont');

const scores = document.createElement('div');

scoreContainer.append(scores);


// Show Decision
const paraContainer = document.createElement('div');
paraContainer.classList.add('paraCont');

const yourPara = document.createElement('div');
const compPara = document.createElement('div');

paraContainer.append(yourPara, compPara);

// Reset button with the container containing it
const resetBtn = document.createElement("button");
resetBtn.classList.add("resetBtn");
resetBtn.textContent = "Reset!";

resetBtn.addEventListener('click', () => {
    location.reload();
});

const resetCont = document.createElement('div');
resetCont.classList.add('resetCont');
resetCont.appendChild(resetBtn)