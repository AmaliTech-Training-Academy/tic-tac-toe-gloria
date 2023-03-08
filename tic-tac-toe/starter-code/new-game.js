const player = document.querySelector(".player");
const cpu = document.querySelector(".cpu")
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score")
const tieScore = document.querySelector('.tie-score');
const boxes = Array.from(document.querySelectorAll(".box"));

const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

const xOutline = '<img src="../starter-code/assets/icon-x-outline.svg">';
const oOutline = '<img src="../starter-code/assets/icon-o-outline.svg">';

const oText = 'O';
const xText = 'X';

let currentPlayer = xPlayer;

//create array with 9 indexes
let spaces = Array(9).fill(null);
const isGameActive = true

//winning condition
const winningCondition = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]



boxes.forEach((box, index) =>{
    box.addEventListener('click', ()=> userAction(box, index));
});

//restart game
const restartBtn = document.querySelector('.restart-button')
const restart =() =>{
    spaces.fill(null)
    boxes.forEach(box =>{
        box.innerHTML = ''
    });
    currentPlayer = xPlayer;
}
restartBtn.addEventListener('click', restart);


startGame();