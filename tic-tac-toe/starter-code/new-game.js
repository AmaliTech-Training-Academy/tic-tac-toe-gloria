const player = document.querySelector(".player");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const tieScore = document.querySelector(".tie-score");
const boxes = Array.from(document.querySelectorAll(".box"));

const cpu = document.querySelector(".cpu-type");
const you = document.querySelector(".players-type");

const xPlayer =
  '<img src="../starter-code/assets/icon-x.svg" class="play-mark">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

const xOutline = '<img src="../starter-code/assets/icon-x-outline.svg">';
const oOutline = '<img src="../starter-code/assets/icon-o-outline.svg">';

const playersTurn = document.querySelector(".players-turn");

const userMark = sessionStorage.getItem("selectedMark");
const cpuMark = sessionStorage.getItem("cpuMark");
// const cpuMark = userMark === "x" ? oPlayer : xPlayer;

you.innerHTML = userMark;
cpu.innerHTML = userMark === "x" ? "O" : "X";

let playTimes = 1;

let isXTurn = true;
const isUserX = userMark === "x";
// do {
//   playersTurn.innerHTML = isXTurn ? xPlayer : oPlayer;
// } while ((isXTurn = !isXTurn));

window.onload = (event) => {
  console.log(userMark);
  if (userMark !== "x") {
    cpuPlay();
  }
  // isXTurn = false;
};

const getNextPlayer = () => {
  return playTimes % 2 === 0;
};

const placeMark = (id) => {
  // getNextPlayer();
  const clickedBox = boxes[id];
  clickedBox.innerHTML = playersTurn.innerHTML === xPlayer ? xPlayer : oPlayer;
  // const nextPlayer = getNextPlayer();
  // console.log("hello", nextPlayer);
  // if (nextPlayer === cpuMark) {
  //   cpuPlay();
  // }
  // isXTurn = !isXTurn;
  // getNextPlayer();
};

const cpuPlay = () => {
  const cpuId = Math.floor(Math.random() * 9);
  if (isAvailablePosition(cpuId)) {
    setTimeout(() => {
      placeMark(cpuId);
    }, 1000);
  } else {
    cpuPlay();
  }
};

const isAvailablePosition = (id) => {
  return boxes[id].innerHTML === "";
};

const startGame = () => {};

const oAnnouncer = document.querySelector(".o-announcer");
oAnnouncer.classList.add("remove-announcer");
//winning condition
const winningCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [0, 4, 7],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

for (let i = 0; i < 10; i++) {}

//check winning conditions
