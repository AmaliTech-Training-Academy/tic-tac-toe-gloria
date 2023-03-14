const p1Mark = document.querySelector(".player1-mark");
const p2Mark = document.querySelector(".player2-mark");

const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

const xOutline = '<img src="../starter-code/assets/icon-x-outline.svg">';
const oOutline = '<img src="../starter-code/assets/icon-o-outline.svg">';

const player1Mark = sessionStorage.getItem("selectedMark");

p1Mark.innerHTML = player1Mark;
p2Mark.innerHTML = player1Mark === "x" ? "O" : "X";

const playersTurn = document.querySelector(".players-turn");
const isXTurn = true;
const getNextPlayer = () => {
  playersTurn.innerHTML = xPlayer;
};
getNextPlayer();

let currentPlayer = xPlayer;
let currentPlayerOutline = xOutline;
const boxes = Array.from(document.querySelectorAll(".box"));
const spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach((box) =>
    box.addEventListener("mouseover", (e) => {
      const id = e.target.id;

      if (!spaces[id]) {
        spaces[id] = currentPlayerOutline;
        // e.target.innerHTML = currentPlayerOutline;
        currentPlayerOutline =
          currentPlayerOutline === xOutline ? oOutline : xOutline;
      }
    })
  );

  boxes.forEach((box) =>
    box.addEventListener("click", (e) => {
      const id = e.target.id;

      if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === xPlayer ? oPlayer : xPlayer;
      }
    })
  );
};

startGame();
