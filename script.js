console.log('Tic Tac Toe')

const BOARD_WIDTH = 3;
let currentPlayer = 1;
let numMovesDone = 0;

const WinCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];

const gameHeading = document.getElementById('gameHeading')
const gameSquare = document.querySelectorAll('.gameSquare');
const restartGame = document.getElementById('restartGame');

gameSquare.forEach((gameSquare, i )=> {
gameSquare.addEventListener('click', () =>{
    console.log("clicked");
    const row = Math.floor(i / BOARD_WIDTH)
    const coll = i % BOARD_WIDTH
    makeMove(gameSquare, row, coll);
 });    
});

restartGame.addEventListener('click',restartButton);

function makeMove(gameSquare){
    gameSquare.textContent = currentPlayer == 1 ? 'X' : 'O'
    gameSquare.disable = true;
    numMovesDone++

    if (didPlayerWin()) {
        gameHeading.textContent = `Player ${currentPlayer} Won!`
        endGame();

    }else if(numMovesDone >= BOARD_WIDTH*BOARD_WIDTH){
        gameHeading.textContent = 'Game Tie'
        endGame();

    }else{
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        setCurrentPlayerHeadder(); 
        

    }
}

function didPlayerWin(){
    const releventText = currentPlayer === 1 ? 'X' : 'O'
    return WinCondition.some(condition =>{
        return condition.every(gameSquarePostion =>{
            return gameSquare[gameSquarePostion].textContent === releventText;
        });
    });
}

function endGame(){
    restartGame.style.display = 'block'
    gameSquare.forEach(gameSquare=>{
        gameSquare.disabled = true;
    });
};

function setCurrentPlayerHeadder(){
    gameHeading.textContent = ` Player ${currentPlayer}'s Turn`
}

function restartButton(){
    currentPlayer = 1;
    numMovesDone = 0;
    setCurrentPlayerHeadder();
    gameSquare.forEach(gameSquare => {
        gameSquare.textContent ='';
        gameSquare.disabled = false;
    });
    restartGame.style.display = 'none'
};
