//This file has been edited
//global variables
//option chosen by player or computer
let playerOption = "";
let computerOption = "";
//the image related to the options choosen
let playerImage = "";
let computerImage = "";
//both players have 2 lives at the start of the game
let playerLives = 3;
let computerLives = 3;
//RoudOutput will start off as blank until the result of the round is declared
let roundOutput = '';
//will display a message to the users if they try pressing after the match ended
let stopMessage = `You cant play anymore`;
let displayStop = '';



const selectionArray = [
    {name:'rock', imageLink:'/RockPaperSiccorGame/images/rock.png', alt:'rock'},
    {name: 'paper', imageLink:'/RockPaperSiccorGame/images/paper.png', alt:'paper'},
    {name: 'siccors', imageLink:'/RockPaperSiccorGame/images/siccors.png', alt:'siccors'}];


//displays lives at the start of the game
let playerLivesDisplay = document.getElementById('playerLives').innerHTML = playerLives;
let ComputerLivesDisplay = document.getElementById('computerLives').innerHTML = computerLives;

//Collects the plays input when player presses button
function playerTurn(input){
    console.log(playerLives);
    console.log(computerLives);

    playerLivesDisplay = document.getElementById('playerLives').innerHTML = playerLives;
    ComputerLivesDisplay = document.getElementById('computerLives').innerHTML = computerLives;

    displayResults();

    
    

    
//if the player and computer has lives more than zero contine playing the game
    if(playerLives > 0 && computerLives > 0){
        console.log("valid")
        //converts the players input into a option variable using the option avalable in SelectionArray
        if(input === 'rock'){
            playerOption = selectionArray[0].name;
            playerImage = selectionArray[0].imageLink;
            console.log(playerOption);
            computerTurn();
        }else if(input === 'paper'){
            playerOption = selectionArray[1].name;
            playerImage = selectionArray[1].imageLink;
            console.log(playerOption);
            computerTurn();
        }else if(input === 'siccors'){
            playerOption = selectionArray[2].name;
            playerImage = selectionArray[2].imageLink;
            console.log(playerOption);
            computerTurn();
        } 
}else{//prevents the player from playing the game after the game has concluded
        console.log("you cannot play")
        playerLivesDisplay = document.getElementById('playerLives').innerHTML = playerLives;
        ComputerLivesDisplay = document.getElementById('computerLives').innerHTML = computerLives;
        displayStop = document.getElementById('stopMessage').innerHTML = stopMessage;

    }
}



//The system will choose its own input by random
function computerTurn(){
    console.log("its the computers turn now");
//Fist creates a random number to then match it to any of options in the ComputerOption array
    
    let randomSelect = Math.floor(Math.random() * selectionArray.length);
    console.log(randomSelect);
    computerOption = selectionArray[randomSelect].name;
    computerImage = selectionArray[randomSelect].imageLink;
    console.log(computerImage);
    console.log("The computer selected", computerOption);
    calculateWinner();
}
//detects the winner of a round acording to the posible choices
function calculateWinner(){


//The displayResults function will be called along with sending who is the Winner and what option they used as two parameters

/*Index guide
Rock =[0]
Paper =[1]
Scissors=[2]
*/
    if(playerOption === selectionArray[0].name){
        if(computerOption === selectionArray[2].name)
        {
            console.log("Player Wins");
            computerLives--;
            displayResults('Player', 'Rock');
    
            computerLives--;
        }else if(computerOption === selectionArray[1].name){
            console.log("Player Loses");
            playerLives--;
            displayResults('Computer','Paper');

        }else if(computerOption === selectionArray[0].name){
            displayResults('null','tie');
        }
    }
    
    else if(playerOption === selectionArray[2].name){
        if(computerOption === selectionArray[1].name){
            console.log("Player Wins");
            computerLives--;
            displayResults('Player', 'siccors');
        }else if(computerOption === selectionArray[0].name){
            console.log("Player Loses");
            playerLives--;
            displayResults('Computer', 'rock');
        }else if(computerOption === selectionArray[2].name){
            console.log("Tie");
            displayResults('null', 'tie');
        }
    }

    else if(playerOption === selectionArray[1].name){
        if(computerOption === computerOption[0].name){
            console.log("Player Wins");
            computerLives--;
            displayResults('Player', 'paper')
        }else if(computerOption === selectionArray[2].name){
            console.log("Player Loses");
            playerLives--;
            displayResults('Computer', 'siccors');

        }else if(computerOption === selectionArray[1].name){
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

        //reset the tie round images in tie display to make room for the next round
        imageOutput = '';
        imageDisplay = document.getElementById('tieImage').innerHTML = '';

        //displays images of the players options
        imageOutput = `<p class="imageName">${playerOption}</p>
        <img src="${playerImage}" alt="rock" width="200" height="200">`;
        imageDisplay = document.getElementById('playerImage').innerHTML = imageOutput;

        imageOutput = `<p class="imageName">${computerOption}</p>
        <img src="${computerImage}" alt="rock" width="200" height="200">`;
        imageDisplay = document.getElementById('computerImage').innerHTML = imageOutput;

    
        if(roundResult != 'tie'){
            roundOutput = `And the winner is ${roundWinner} using ${roundResult}`;
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;

            //prevents a bug when one of the player hit zero but entered the if statment as one. 
            //When player loses lives the function will restart so it will display the winner and loses that are triggered in the else around line 209
            if(playerLives < 0 || computerLives < 0){
                displayResults();
            }

            //displayed if round ended in a tie
        }else if(roundOutput = 'tie'){
            roundOutput = `Its a Tie!!!`;
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;

            //resets all the images from the previous rounds to make room
            imageOutput = '';
            imageDisplay = document.getElementById('playerImage').innerHTML = '';
            imageDisplay = document.getElementById('computerImage').innerHTML = '';

            //displays the image when round is tie
            imageOutput = `<p class="imageName">Tied</p>
            <img src="/RockPaperSiccorGame/images/shrugs.png" alt="rock" width="200" height="200">`;
            imageDisplay = document.getElementById('tieImage').innerHTML = imageOutput;

            

    
        }
    }else{
        console.log("Some one lost")

        imageOutput = `<p class="imageName">${playerOption}</p>
        <img src="${playerImage}" alt="rock" width="200" height="200">`;
        imageDisplay = document.getElementById('playerImage').innerHTML = imageOutput;

        imageOutput = `<p class="imageName">${computerOption}</p>
        <img src="${computerImage}" alt="rock" width="200" height="200">`;
        imageDisplay = document.getElementById('computerImage').innerHTML = imageOutput;

         //reset the tie round images in tie display to make room for the next round
         imageOutput = '';
         imageDisplay = document.getElementById('tieImage').innerHTML = '';
 

        //The final results displayed when on of the player loses all lived leaving the opponent as the winner.
        if(playerLives === 0){
            roundOutput = `Computer is the sole winner of this match <br> try better next time.`;
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;

            imageOutput = `<p class="imageName">You lost</p>
            <img src="/RockPaperSiccorGame/images/lose.jpg" alt="rock" width="200" height="200">`;
            imageDisplay = document.getElementById('tieImage').innerHTML = imageOutput;
        }
        else if(computerLives === 0){
            console.log("This if statment is active")
            imageOutput = `<p class="imageName">You won</p>
            <img src="/RockPaperSiccorGame/images/VictoryRoyale.png" alt="rock" width="200" height="200">`;
            imageDisplay = document.getElementById('tieImage').innerHTML = imageOutput;

            roundOutput = `You WIN!!!!!!! <br> you have defeated the computer's three lives.`
            playerResultDisplay = document.getElementById('result').innerHTML = roundOutput;

            
        }
    }
        
    //displays both lives in console
    console.log("Lives: ", playerLives);
    console.log("Lives: ", computerLives);
}
