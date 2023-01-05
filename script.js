console.log("Hello Cleveland!");

//Started by R Selkowitz Jan 3 2023

let wins = 0;
let losses = 0;
let draws = 0;
let isGameOver = false;

function computer_choice(){
    choice=(1+Math.floor(Math.random()*3));
    if (choice == 1) {
            return "Rock";
        } else if (choice == 2) {
            return "Paper";
        } else (choice == 3) 
            return "Scissors";       
}
function human_choice(){
    let response = prompt("Pick 1 for Rock, 2 for Paper, or 3 for Scissors.");
    if (response == 1){
        let choice = "Rock";
        return choice;
    } else if (response == 2){
        let choice = "Paper";
        return choice;
    } else if (response ==3){
        let choice = "Scissors";
        return choice;
    } else {
        let choice = "I don't understand you. Try again.";
        console.log(choice);
        return choice;
    }
}
function playRound(humanChoice){
    
    let computerChoice = computer_choice();
    
    if (isGameOver == false){
        roundInfo.textContent = "You chose " + humanChoice + 
    " and the computer chose " + computerChoice +"!";
    } 

        if (humanChoice == computerChoice){
            draws ++;
            
        } else if ((humanChoice == "Rock" && computerChoice == "Paper") 
        || (humanChoice == "Scissors" && computerChoice == "Rock")
        || (humanChoice == "Paper" && computerChoice == "Scissors")){
            losses ++;

            
        } else if ((humanChoice == "Paper" && computerChoice == "Rock") 
        || (humanChoice == "Rock" && computerChoice == "Scissors")
        || (humanChoice == "Scissors" && computerChoice == "Paper")){
            wins++;
                        
        } else {
            console.log("Something went wrong.")
                    }
        updateScore();
        return;

    }

function updateScore(){
    if (isGameOver == true){
        gameOver.textContent = "Game Over man. Game over.";    

    }else if (wins >= 5){
        winCount.textContent = "Human: " + wins + 
        " you actually won?!";
        isGameOver = true;
    }else if (losses >= 5) {
        lossCount.textContent = "Computer: " + losses + 
        " another glorious triumph for computerkind!";
        isGameOver = true;        
    }else {
        winCount.textContent = "Human: " + wins;
        lossCount.textContent = "Computer: " + losses;
        }
}

function startGame(){
    wins=0;
    losses=0;
    draws=0;
    isGameOver = false;
    gameOver.textContent = " "
    roundInfo.textContent = "What will you choose?"
    updateScore();
    return;
        
}


    const startbtn = document.querySelector('#start');
    startbtn.addEventListener('click', startGame);

    const winCount = document.querySelector('#winCount');
    const lossCount = document.querySelector('#lossCount');
    const drawCount = document.querySelector('#drawCount');
    const gameOver = document.querySelector('#gameOver');    
    const rockbtn = document.querySelector('#rock');
    rockbtn.addEventListener('click', roundRock);
    function roundRock() {playRound("Rock");}

    const paperbtn = document.querySelector('#paper');
    paperbtn.addEventListener('click', roundPaper);
    function roundPaper() {playRound("Paper");}

    const scissorsbtn = document.querySelector('#scissors');
    scissorsbtn.addEventListener('click', roundScissors);
    function roundScissors() {playRound("Scissors");}  
    const roundInfo = document.querySelector('#roundInfo');


