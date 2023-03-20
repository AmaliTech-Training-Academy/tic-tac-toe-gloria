// const p1Mark = document.querySelector(".player1-mark");
// const p2Mark = document.querySelector(".player2-mark");

// const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
// const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

// const xOutline = '<img src="../starter-code/assets/icon-x-outline.svg">';
// const oOutline = '<img src="../starter-code/assets/icon-o-outline.svg">';

// const player1Mark = sessionStorage.getItem("selectedMark");

// const xWon = document.querySelector(".o-announcer");

// const oWon = document.querySelector(".x-announcer");
// const tie = document.querySelector(".tie-announcer");
let oTurn;
const xMark = "x";
const oMark = "o";
const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';
const player1Mark = sessionStorage.getItem("selectedMark");
const player2Mark = player1Mark === "x" ? "o" : "x";
const boxes = Array.from(document.querySelectorAll(".box"));
boxes.forEach((box) => {
  box.addEventListener("click", handleClick, { once: true });
});

const handleClick = (e) => {
  const box = e.target;
  const currentPlayer = player1Mark === "x" ? xMark : oMark;
  placeMark(box, currentPlayer);
};
const placeMark = (box, currentPlayer) => {
  box.classList.add(currentPlayer);
};

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
