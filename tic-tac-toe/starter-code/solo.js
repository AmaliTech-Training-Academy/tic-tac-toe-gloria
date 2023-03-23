const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

const board = document.querySelector(".board");
const whoseTurn = document.querySelector(".players-turn");
whoseTurn.innerHTML = xPlayer;

const boxes = Array.from(document.querySelectorAll(".box"));

let nextPlayer = "",
  firstPlayer = "";

// let currentPlayer = sessionStorage.getItem("selectedMark") === 'x' ? playerMark : computerMark

// const playerMark = sessionStorage.getItem("selectedMark");
// const getPlayerMark = document.querySelector(".players-type");
// getPlayerMark.innerHTML = playerMark;

// const cpuMark = sessionStorage.getItem("cpuMark");
// const getcpuMark = document.querySelector(".cpu-type");
// getcpuMark.innerHTML = cpuMark;

// const playersMark = playerMark === "x" ? xPlayer : oPlayer;
// const computerMark = cpuMark === "x" ? xPlayer : oPlayer;

const handleClick = (id) => {
  if (boxes[id].innerHTML === "") {
    if (firstPlayer === "player") {
      placeMark(id, xPlayer);
    } else {
      placeMark(id, oPlayer);
    }
  }
  setTimeout(() => {
    cpuPlay();
  }, 1000);

  console.log(id);
};
const startGame = () => {
  if (sessionStorage.getItem("selectedMark") === "x") {
    firstPlayer = "player";
  } else {
    firstPlayer = "cpu";
  }
  nextPlayer = firstPlayer;
  if (firstPlayer === "cpu") {
    setTimeout(() => {
      cpuPlay();
    }, 1000);
  }
};

window.onload = () => {
  startGame();
};

const placeMark = (id, mark) => {
  boxes[id].innerHTML = mark;
  //whoseTurn === xPlayer ? xPlayer : oPlayer
  //place mark when user click
  //place cpu mark when a box is selected
};

const switchPlayers = () => {
  whoseTurn.innerHTML = currentPlayer === xPlayer ? oPlayer : xPlayer;
};

const cpuPlay = () => {
  const boxarr = boxes.map((ele) => ele.id);
  let emptyBoxes = [];
  const boxesId = boxes.map((ele) => ele.id);
  boxesId.map((id) => {
    if (boxes[id].innerHTML === "") {
      emptyBoxes.push(id);
    }
  });
  const cpuId = Math.floor(Math.random() * emptyBoxes.length);
  const randomNum = emptyBoxes[cpuId];
  const index = boxarr.indexOf(randomNum);
  const mark = sessionStorage.getItem("cpuMark") === "x" ? xPlayer : oPlayer;
  placeMark(index, mark);
};
