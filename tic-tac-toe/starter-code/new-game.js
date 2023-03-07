const player = document.querySelector(".player");
const cpu = document.querySelector(".cpu")
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score")
const tieScore = document.querySelector('.tie-score');

const xPlayer = new Image();
xPlayer.src = './assets/icon-x.svg'
const oPlayer = new Image();
oPlayer.src = './assets/icon-o.svg';



const xOutline = new Image();
xOutline.src = './assets/icon-x-outline.svg';
const oOutline = new Image();
oOutline.src = './assets/icon-o-outline.svg';


const oText = 'O';
const xText = 'X';

const playerState = document.querySelector(".player-state");

let boxes = Array.from(document.getElementsByClassName('box'));

let currentPlayer = xPlayer;

//create array with 9 indexes
let spaces = Array(9).fill(null);

//start game
const startGame = ()=>{
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

const boxClicked = (e)=>{
    const id = e.target.id;
    //if spaces is not filled with id

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerHtml = currentPlayer;

        currentPlayer = currentPlayer === xPlayer ? oPlayer : xPlayer;
    }
}


//restart game
const restartBtn = document.querySelector('.restart-button')
const restart =() =>{
    spaces.fill(null)
    boxes.forEach(box =>{
        box.innerText = ''
    });
    currentPlayer = xPlayer;
}
restartBtn.addEventListener('click', restart);


startGame();