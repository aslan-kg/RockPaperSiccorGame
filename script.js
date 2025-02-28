//global variables
let playerOption = "";
let computerOption = "";

let playerLives = 3;
let computerLives = 3;

let roundOutput = '';

//displays lives at the start of the game
let playerLivesDisplay = document.getElementById('playerLives').innerHTML = playerLives;
let ComputerLivesDisplay = document.getElementById('computerLives').innerHTML = computerLives;

//Collects the plays input when player presses button
function playerTurn(input){
    console.log(playerLives);
    console.log(computerLives);

    if(playerLives > 0){
        console.log("valid")
        playerOption = input;
        console.log(playerOption);
        computerTurn();
        return;
    }else{
        console.log("you cannot play")
    }
}
//player lives



//The system will choose its own input by random
function computerTurn(){
    console.log("its the computers turn now");
//Fist creates a random number to then match it to any of the option below
    const computerSelection = ['rock', 'paper', 'siccors'];
    let randomSelect = Math.floor(Math.random() * computerSelection.length);
    console.log(randomSelect);
    computerOption = computerSelection[randomSelect];
    console.log(computerOption);
    calculateWinner();
}
//detects the winner
function calculateWinner(){
    console.log(playerOption);
    console.log(computerOption);
    console.log("And the winner is...")
//if playerOption or ComputerOption are in the these posibilities.
//The displayResults function will be called with sending the Winner and the Option used as parameters
    if(playerOption === 'rock'){
        if(computerOption === 'siccors')
        {
            console.log("Player Wins"); 
            displayResults('Player', 'Rock');
    
            computerLives--;
        }else if(computerOption === 'paper'){
            console.log("Player Loses");
            playerLives--;
            displayResults('Computer', 'Paper');

        }else if(computerOption === 'rock'){
            displayResults('null','tie');
        }
    }
    
    else if(playerOption === 'siccors'){
        if(computerOption === 'paper'){
            console.log("Player Wins");
            computerLives--;
            displayResults('Player', 'siccors');
        }else if(computerOption === "rock"){
            console.log("Player Loses");
            playerLives--;
            displayResults('Computer', 'rock');
        }else if(computerOption === 'siccors'){
            console.log("Tie");
            displayResults('null', 'tie');
        }
    }

    else if(playerOption === 'paper'){
        if(computerOption === 'rock'){
            console.log("Player Wins");
            computerLives--;
            displayResults('Player', 'paper')
        }else if(computerOption === 'siccors'){
            console.log("Player Loses");
            playerLives--;
            displayResults('Computer', 'siccors');

        }else if(computerOption === 'paper'){
            console.log("Tie");
            displayResults('null', 'tie');
        }
    }

    
    return;
}
//function has a parameter for who won the round, And a what option they won with
function displayResults(roundWinner, roundResult){
    //displays the Player chances they have left in the game. It is lost when the player loses a round
    playerLivesDisplay = document.getElementById('playerLives').innerHTML = playerLives;
    ComputerLivesDisplay = document.getElementById('computerLives').innerHTML = computerLives;
    
    
    /* console.log(roundWinner);
    console.log("And the result is", roundResult); */

    //result are displayed in html with this variable
    let playerResultDisplay = ''
//who ever wins one of the rounds are displayed
    if(playerLives > 0 && computerLives > 0){
        if(roundResult != 'tie'){
            roundOutput = `And the winner is ${roundWinner} using ${roundResult}`;
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;
        }else if(roundOutput = 'tie'){
            roundOutput = `Its a Tie!!!`;
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;
        }
    }
        //The final results displayed when on of the player loses all lived leaving the opponent as the winner.
        if(playerLives === 0){
            roundOutput = `Computer is the sole winner of this match <br> try better next time.`;
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;
        }else if(computerLives === 0){
            roundOutput = `You WIN!!!!!!! <br> you have defeated the computer's three lives.`
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;
        }
    
    console.log("Lives: ", playerLives);
    console.log("Lives: ", computerLives);
}

