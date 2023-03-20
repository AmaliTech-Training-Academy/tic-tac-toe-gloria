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

const handleClick = (e) => {
  const box = e.target;
  const currentPlayer = playersTurn.innerHTML === xPlayer ? xClass : oClass;
  console.log("clicked");
  placeMark(box, currentPlayer);
  switchPlayers();
  setBoxesHoverState();
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

const startGame = () => {
  boxes.forEach((box) => {
    box.addEventListener("click", handleClick, { once: true });
  });
  setBoxesHoverState();
};
startGame();

const placeMark = (box, currentPlayer) => {
  box.classList.add(currentPlayer);
};

const switchPlayers = () => {
  playersTurn.innerHTML = playersTurn.innerHTML === xPlayer ? oPlayer : xPlayer;
};

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

const restartBtn = document.querySelector(".restart-button");
const restartModal = document.querySelector(".restart-modale");

const restartGame = () => {
  console.log("hi");
  restartModal.classList.add(show);
};
restartBtn.addEventListener("click", restartGame);
