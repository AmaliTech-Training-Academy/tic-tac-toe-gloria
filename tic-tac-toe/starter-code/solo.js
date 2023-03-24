const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

// let mark = "";

const board = document.querySelector(".board");
const whoseTurn = document.querySelector(".players-turn");
whoseTurn.innerHTML = xPlayer;

const boxes = Array.from(document.querySelectorAll(".box"));

let nextPlayer = "",
  firstPlayer = "";

const playerMark = sessionStorage.getItem("selectedMark"),
  getPlayerMark = document.querySelector(".players-type");
getPlayerMark.innerHTML = playerMark;

const cpuMark = sessionStorage.getItem("cpuMark");
const getcpuMark = document.querySelector(".cpu-type");
getcpuMark.innerHTML = cpuMark;

const tieModal = document.querySelector(".tie-announcer");

const winningCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const handleClick = (id) => {
  if (boxes[id].innerHTML === "") {
    if (firstPlayer === "player") {
      placeMark(id, xPlayer);
      // if(checkWin(xPlayer)) {
      // }
    } else {
      placeMark(id, oPlayer);
      console.log(oPlayer);
    }
  }
  setTimeout(() => {
    cpuPlay();
  }, 1000);
  checkForWin();
};

const whoWins = () => {};

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
  switchTurns(id);
};

const switchTurns = (id) => {
  whoseTurn.innerHTML = boxes[id].innerHTML === xPlayer ? oPlayer : xPlayer;
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

const restartBtn = document.querySelector(".restart-button"),
  restartModal = document.querySelector(".restart-modale"),
  cancelRestart = document.querySelector(".cancel-restart"),
  restart = document.querySelector(".confirm-restart");
const main = document.querySelector("main");

const restartNewGame = () => {
  whoseTurn.innerHTML = xPlayer;
  restartModal.classList.remove("show-restart-modal");
  const boxesId = boxes.map((ele) => ele.id);
  boxesId.map((id) => {
    boxes[id].innerHTML = "";
  });
};

const restartGame = () => {
  main.classList.add("modal-background");
  restartModal.classList.add("show-restart-modal");
  cancelRestart.addEventListener("click", () => {
    restartModal.classList.remove("show-restart-modal");
  });
  restart.addEventListener("click", restartNewGame);
};

restartBtn.addEventListener("click", restartGame);

const check_win = (mark) => {
  let wincombination = [];
  return winningCombos.some((combination) => {
    const winCombo = combination.every((id) => {
      boxes[id].innerHTML === mark;
      // console.log(boxes[id].innerHTML);
    });
    if (winCombo) {
      wincombination = [...combination];
    }
    return winCombo;
  });
  // if (mark === xPlayer) {
  //   winCombo.forEach(id => {
  //     boxes[id]
  //   });
  // }
  // return mark;
};
