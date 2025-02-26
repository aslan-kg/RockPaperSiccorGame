let playerOption = "";
let computerOption = "";
let didPlayerDoTurn = true;



function playerTurn(input){
    if(didPlayerDoTurn === true){
        console.log("valid")
        playerOption = input;
        console.log(playerOption);
        computerTurn();
        return didPlayerDoTurn = false
    }else if(didPlayerDoTurn === false){
        console.log("not valid")
    }
}


function computerTurn(){
    console.log("its the computers turn now");
    let randomSelect = Math.ceil(Math.random() * 3);

    if(randomSelect === 1){
        console.log("Rock")
        computerOption = 'rock'
        calculateWinner();
    }else if(randomSelect === 2){
        console.log("Paper")
        computerOption = 'paper'
        calculateWinner();
    }else if(randomSelect === 3){
        console.log("Siccors")
        computerOption = 'siccors'
        calculateWinner();
    }
}

function calculateWinner(){
    console.log("And the winner is...")
    console.log(playerOption);
    console.log(computerOption);
}