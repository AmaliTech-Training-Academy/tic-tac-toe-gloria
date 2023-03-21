const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

const board = document.querySelector(".board");
const playersTurn = document.querySelector(".players-turn");
playersTurn.innerHTML = xPlayer;
const xClass = "xMark";
const oClass = "oMark";
const player1Mark = sessionStorage.getItem("selectedMark");
const player2Mark = player1Mark === "x" ? "o" : "x";
const boxes = document.querySelectorAll("[data-cell]");
const modals = document.getElementsByTagName("article");
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

const winningCombos = [
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

const endGame = (draw) => {
  if (draw) {
    main.classList.add("modal-background");
    tieModal.classList.add("show-tie");
  }
  //fix the logic here
  main.classList.add("modal-background");
  player1XModal.classList.add("show-p1-xmodal");
};

const isDraw = () => {
  return [...boxes].every((box) => {
    return box.classList.contains(xClass) || box.classList.contains(oClass);
  });
};

const handleClick = (e) => {
  const box = e.target;
  const currentPlayer = playersTurn.innerHTML === xPlayer ? xClass : oClass;
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
};

const startGame = () => {
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
  return winningCombos.some((combination) => {
    return combination.every((id) => {
      return boxes[id].classList.contains(currentPlayer);
    });
  });
};
