
# Rock Paper Scissor Game

## Description
A competive game where the outcome is impossble to every know!

## How to play
1. First you have to press the buttons on the left. You have Rock, Paper, and Scissor
2. The Section under it will display if you or the computer wins the match
3. If you win you take the one of the computer's 3 lives. if you lose your lives get taken
4. Who ever drags the others lives to 0 wins the game
5. So dont push your luck ladies and gentlemen!!!

## Technologies Used
- HTML
- CSS
- JavaScript
- Github

## Features
- 3 Functional player input buttons
- Randonly generated responces to input
- Visual feedback
- Section with step by step explaination of game.

## Project structure
There are fours parts to this project
- **index.html** file as the webpage
- **style.css file** to style the HTML document
- **script.js file** to collect user inputs. process its input with random decesions. Then outputed back to the index.html

## Code Example
```javascript
//detects the winner of a round acording to the posible choices
function calculateWinner(){




/*Index guide
Rock =[0]
Paper =[1]
Scissors=[2]
*/

//if playerOption value matches "rock" found in the object in index [0]. 
    if(playerOption === selectionArray[0].name){
        //cycle through all the options that the computer's potential options to then determin the result of a round.

        //The displayResults function will be called along with sending who is the Winner and what option they used as two parameters
        if(computerOption === selectionArray[2].name)
        {
            console.log("Player Wins"); 
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
    //the rest function is continued on for the other players options...
}
```
## CREDITS
Created by: Aslan Ortiz

For: West-Med Coding Year 1

Resource: ZYBooks Java Fundemental, and Java Script in browser
