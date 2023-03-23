const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

let currentPlayer = "";

const board = document.querySelector(".board");
const playersTurn = document.querySelector(".players-turn");
playersTurn.innerHTML = xPlayer;
const xClass = "xMark";
const oClass = "oMark";

const player1Mark = sessionStorage.getItem("selectedMark");
const player2Mark = player1Mark === "x" ? "o" : "x";
const getPlayer2Mark = document.querySelector(".player2-mark");
getPlayer2Mark.innerHTML = player2Mark;
const getPlayer1Mark = document.querySelector(".player1-mark");
getPlayer1Mark.innerHTML = player1Mark;

//getting the score divs
const player2Scores = document.querySelector(".player-2-scores");
const player1Scores = document.querySelector(".player-1-scores");
const tieScores = document.querySelector(".tie-score");

const boxes = document.querySelectorAll("[data-cell]");
const main = document.querySelector("main");
const body = document.querySelector(".body");

//winning modals
const player1OModal = document.querySelector(".p1-o-announcer");
const player1XModal = document.querySelector(".p1-x-announcer");

const player2OModal = document.querySelector(".p2-o-announcer");
const player2XModal = document.querySelector(".p2-x-announcer");

const tieModal = document.querySelector(".tie-announcer");

const restartModal = document.querySelector(".restart-modale");
const restartBtn = document.querySelector(".restart-button");
const cancelRestart = document.querySelector(".cancel-restart");
const restart = document.querySelector(".confirm-restart");

const quitBtn = document.querySelectorAll(".quit");

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

let tieValue = 0;
tieScores.innerText = 0;
const getScoresForTie = () => {
  tieValue += 1;
  tieScores.innerText = tieValue;
};

let p1Scores = 0;
player1Scores.innerText = 0;
const getScoresForPlayer1 = () => {
  p1Scores += 1;
  player1Scores.innerText = p1Scores;
};

let p2Scores = 0;
player2Scores.innerText = 0;
const getScoresForPlayer2 = () => {
  p2Scores += 1;
  player2Scores.innerText = p2Scores;
};

const endGame = (draw) => {
  if (draw) {
    getScoresForTie();
    main.classList.add("modal-background");
    tieModal.classList.add("show-tie");
  } else if (checkWin(currentPlayer) === "xMark") {
    if (player1Mark === "x") {
      getScoresForPlayer1();
      main.classList.add("modal-background");
      player1XModal.classList.add("show-p1-xmodal");
    } else {
      getScoresForPlayer2();
      main.classList.add("modal-background");
      player2XModal.classList.add("show-p2-xmodal");
    }
  } else if (checkWin(currentPlayer) === "oMark") {
    if (player1Mark === "o") {
      getScoresForPlayer1();
      main.classList.add("modal-background");
      player1OModal.classList.add("show-p1-omodal");
    } else {
      getScoresForPlayer2();
      main.classList.add("modal-background");
      player2OModal.classList.add("show-p2-omodal");
    }
  }
  console.log(checkWin(currentPlayer));
};

const isDraw = () => {
  return [...boxes].every((box) => {
    return box.classList.contains(xClass) || box.classList.contains(oClass);
  });
};

const handleClick = (e) => {
  const box = e.target;
  currentPlayer = playersTurn.innerHTML === xPlayer ? xClass : oClass;
  placeMark(box, currentPlayer);
  if (checkWin(currentPlayer)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchPlayers();
    setBoxesHoverState();
  }
};

const setBoxesHoverState = () => {
  board.classList.remove(xClass);
  board.classList.remove(oClass);

  if (playersTurn.innerHTML === xPlayer) {
    board.classList.add(xClass);
  } else {
    board.classList.add(oClass);
  }
};

const restartGame = () => {
  main.classList.add("modal-background");
  restartModal.classList.add("show-restart-modal");
  cancelRestart.addEventListener("click", () => {
    restartModal.classList.remove("show-restart-modal");
  });
  restart.addEventListener("click", startGame);
  main.classList.remove("modal-background");
};

const startGame = () => {
  playersTurn.innerHTML = xPlayer;
  boxes.forEach((box) => {
    box.classList.remove(xClass);
    box.classList.remove(oClass);
    box.removeEventListener("click", handleClick);
    box.addEventListener("click", handleClick, { once: true });
  });
  setBoxesHoverState();
  restartModal.classList.remove("show-restart-modal");
};
startGame();
restartBtn.addEventListener("click", restartGame);
const placeMark = (box, currentPlayer) => {
  box.classList.add(currentPlayer);
};

const switchPlayers = () => {
  playersTurn.innerHTML = playersTurn.innerHTML === xPlayer ? oPlayer : xPlayer;
};

const checkWin = (currentPlayer) => {
  let wincombo;
  const won = winningCombos.some((combination) => {
    const winCombo = combination.every((id) => {
      return boxes[id].classList.contains(currentPlayer);
    });
    if (winCombo) {
      wincombo = combination
    }
    return winCombo
  });
  if (won) {
    if (currentPlayer === 'xMark') {
      wincombo.forEach(id => {
        boxes[id].classList.add('xWon')
      })
    }
    return currentPlayer;
  }
};

//quit button functionality
quitBtn.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});

//next round button functionality
const nextRoundBtn = document.querySelectorAll(".next-round");
nextRoundBtn.forEach((element) => {
  element.addEventListener("click", () => {
    startGame();
    main.classList.remove("modal-background");
    tieModal.classList.remove("show-tie");
    player1XModal.classList.remove("show-p1-xmodal");
    player2XModal.classList.remove("show-p2-xmodal");
    player1OModal.classList.remove("show-p1-omodal");
    player2OModal.classList.remove("show-p2-omodal");
  });
});
