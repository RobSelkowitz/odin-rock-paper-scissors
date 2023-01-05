console.log("Hello Cleveland!");

//Started by R Selkowitz Jan 3 2023

let wins = 0;
let losses = 0;
let draws = 0;
const Rock = "Rock";

/* removing this while building AI
console.log ("Let's play a best of five, squishy human.  Rock paper scissors, go!");
console.log ("You won " + bestOfFive() + " rounds. I won " + losses +" rounds. Not bad for a human.");
*/

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
    console.log("You chose " + humanChoice + " and the computer chose " + computerChoice +"!");
        if (humanChoice == computerChoice){
            console.log ("Let's call it a draw.")
            draws ++;
            drawCount.textContent = "Draws: " + draws;
            return "draw";
        } else if ((humanChoice == "Rock" && computerChoice == "Paper") 
        || (humanChoice == "Scissors" && computerChoice == "Rock")
        || (humanChoice == "Paper" && computerChoice == "Scissors")){
            console.log ("The computer wins this time.")
            losses ++;
            lossCount.textContent = "Losses: " + losses;

            return "loss";
        } else if ((humanChoice == "Paper" && computerChoice == "Rock") 
        || (humanChoice == "Rock" && computerChoice == "Scissors")
        || (humanChoice == "Scissors" && computerChoice == "Paper")){
            console.log ("The squishy human wins this time.")
            wins++;
            winCount.textContent = "Wins: " + wins;
            return "win";
        } else {
            console.log("Something went wrong.")
            return "WTF";
        }
    }

function bestOfFive(){
    for (let round = 0; round < 5; round++){
        outcome = playRound();
        if (outcome == "win") wins++;
        else if (outcome == "loss") losses++;
        else if (outcome == "draw") draws++;
        else console.log("That round didn't work right!")
        console.log("Score after " + (round+1) + " rounds is: "
         + wins +" wins, " + draws+ " draws, and " + losses +" losses." );
    }
        return wins;

 
}

    const winCount = document.querySelector('#winCount');
    const lossCount = document.querySelector('#lossCount');
    const drawCount = document.querySelector('#drawCount');
    
    const rockbtn = document.querySelector('#rock');
    rockbtn.addEventListener('click', roundRock);
    function roundRock() {playRound("Rock");}

    const paperbtn = document.querySelector('#paper');
    paperbtn.addEventListener('click', roundPaper);
    function roundPaper() {playRound("Paper");}

    const scissorsbtn = document.querySelector('#scissors');
    scissorsbtn.addEventListener('click', roundScissors);
    function roundScissors() {playRound("Scissors");}

