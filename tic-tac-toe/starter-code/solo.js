const xPlayer = '<img src="../starter-code/assets/icon-x.svg">';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';

const board = document.querySelector(".board");
let whoseTurn = document.querySelector(".players-turn");

const boxes = Array.from(document.querySelectorAll(".box")),
  allBox = document.querySelectorAll(".box");

const playerMark = sessionStorage.getItem("selectedMark"),
  getPlayerMark = document.querySelector(".players-type");
getPlayerMark.innerHTML = playerMark;

const cpuMark = sessionStorage.getItem("cpuMark");
const getcpuMark = document.querySelector(".cpu-type");
getcpuMark.innerHTML = cpuMark;

const tieModal = document.querySelector(".tie-announcer");

const cpuWonWithOMark = document.querySelector(".cpu-o-won"),
  playerWonWithOMark = document.querySelector(".player-o-won"),
  cpuWonWithXMark = document.querySelector(".cpu-x-won"),
  playerWonWithXMark = document.querySelector(".player-x-won");

//change score background
const playerBackground = document.querySelector(".you");
const cpuBackground = document.querySelector(".cpu");
if (playerMark === "x") {
  playerBackground.classList.add("xMarkBackground");
  cpuBackground.classList.add("oMarkBackground");
} else {
  playerBackground.classList.add("oMarkBackground");
  cpuBackground.classList.add("xMarkBackground");
}
//get the score div tags
const playerScores = document.querySelector(".player-score");
const cpuScores = document.querySelector(".cpu-score");
const tieScores = document.querySelector(".tie-score");

//restart game
const restartBtn = document.querySelector(".restart-button"),
  restartModal = document.querySelector(".restart-modale"),
  cancelRestart = document.querySelector(".cancel-restart"),
  restart = document.querySelector(".confirm-restart");
const main = document.querySelector("main");

const restartGame = () => {
  main.classList.add("modal-background");
  restartModal.classList.add("show-restart-modal");
  cancelRestart.addEventListener("click", () => {
    restartModal.classList.remove("show-restart-modal");
  });
  restart.addEventListener("click", () => {
    window.location.reload();
  });
};

restartBtn.addEventListener("click", restartGame);

//increment score
let tieValue = 0;
tieScores.innerText = 0;
const getScoresForTie = () => {
  tieValue += 1;
  tieScores.innerText = tieValue;
};

let userScores = 0;
playerScores.innerText = 0;
const getScoresForPlayer = () => {
  userScores += 1;
  playerScores.innerText = userScores;
};

let botScores = 0;
cpuScores.innerText = 0;
const getScoresForCpu = () => {
  botScores += 1;
  cpuScores.innerText = botScores;
};

// main game
window.onload = () => {
  whoseTurn.innerHTML = xPlayer;
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }

  if (cpuMark === "x") {
    setTimeout(() => {
      getcpuPlay();
    }, 1000);
  }
};

let cpuPlay = true,
  userMark = "x";

const switchTurn = (element) => {
  whoseTurn.innerHTML = element.innerHTML === xPlayer ? oPlayer : xPlayer;
};

const clickedBox = (element) => {
  if (playerMark === "o") {
    userMark = "o";
    element.innerHTML = oPlayer;
    element.setAttribute("id", userMark);
  } else {
    userMark = "x";
    element.innerHTML = xPlayer;
    element.setAttribute("id", userMark);
  }
  switchTurn(element);
  selectWinner();
  checkDraw();
  element.style.pointerEvents = "none";
  setTimeout(() => {
    getcpuPlay(cpuPlay);
  }, 1500);
  console.log(userMark);
};

const getcpuPlay = () => {
  let emptyBoxes = [];
  if (cpuPlay) {
    userMark = "O";
    //generate random id
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        emptyBoxes.push(i);
      }
    }
    let randomBox = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
    //check if id is more than 1
    if (emptyBoxes.length > 0) {
      if (cpuMark === "x") {
        userMark = "x";
        allBox[randomBox].innerHTML = xPlayer;
        whoseTurn.innerHTML =
          allBox[randomBox].innerHTML === xPlayer ? oPlayer : xPlayer;
        allBox[randomBox].style.pointerEvents = "none";
        allBox[randomBox].setAttribute("id", userMark);
      } else {
        allBox[randomBox].innerHTML = oPlayer;
        switchTurn(allBox[randomBox]);
        allBox[randomBox].style.pointerEvents = "none";
        allBox[randomBox].setAttribute("id", userMark);
      }
    }
    selectWinner();
    console.log(userMark);
  }
};

const getIdVal = (className) => {
  return document.querySelector(".box" + className).id; //return id value
};
const checkIdSign = (val1, val2, val3, sign) => {
  //checking all id value is equal to sign (X or O) or not if yes then return true
  if (
    getIdVal(val1) === sign &&
    getIdVal(val2) === sign &&
    getIdVal(val3) === sign
  ) {
    return true;
  }
};

const selectWinner = () => {
  if (
    checkIdSign(1, 2, 3, userMark) ||
    checkIdSign(4, 5, 6, userMark) ||
    checkIdSign(7, 8, 9, userMark) ||
    checkIdSign(1, 4, 7, userMark) ||
    checkIdSign(2, 5, 8, userMark) ||
    checkIdSign(3, 6, 9, userMark) ||
    checkIdSign(1, 5, 9, userMark) ||
    checkIdSign(3, 5, 7, userMark)
  ) {
    cpuPlay = false;
    getcpuPlay(cpuPlay);

    //player modal
    if (playerMark === "x" && userMark === "x") {
      console.log("you x won");
      playerWonWithXMark.classList.add("player-x-show");
      getScoresForPlayer();
      localStorage.setItem("player", getScoresForPlayer);
    } else if (playerMark === "o" && userMark === "o") {
      console.log(" you o won");
      playerWonWithOMark.classList.add("player-o-show");
      getScoresForPlayer();
      localStorage.setItem("player-scores", getScoresForPlayer);
    }

    //cpu modal
    else if (userMark === "x" && playerMark === "o") {
      console.log("cpu x won");
      cpuWonWithXMark.classList.add("cpu-x-show");
      getScoresForCpu();
      localStorage.setItem("cpu-scores", getScoresForCpu);
    } else {
      console.log("cpu o won");
      cpuWonWithOMark.classList.add("cpu-x-show");
      getScoresForCpu();
      localStorage.setItem("cpu-scores", getScoresForCpu);
    }
  }
};
const checkDraw = (id) => {
  // if (
  //   allBox[id].every((box) => {
  //     box.innerHTML !== "";
  //   })
  // ) {
  //   cpuPlay = false;
  //   getcpuPlay(cpuPlay);
  //   console.log("tie");
  //   tieModal.classList.add("show-tie");
  // }
};

//quit button
const quitBtn = document.querySelectorAll(".quit");
quitBtn.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});

const startGame = () => {
  whoseTurn.innerHTML = xPlayer;
  allBox.forEach((box) => {
    box.innerHTML = "";
    box.removeAttribute("onclick", "clickedBox(this)");
    box.setAttribute("onclick", "clickedBox(this)");
    if (cpuMark === "x") {
      setTimeout(() => {
        getcpuPlay();
      }, 1000);
    }
  });
};

//next round button functionality
const nextRoundBtn = document.querySelectorAll(".next-round");
nextRoundBtn.forEach((element) => {
  element.addEventListener("click", () => {
    startGame;
    // main.classList.remove("modal-background");
    tieModal.classList.remove("show-tie");
    cpuWonWithXMark.classList.remove("cpu-x-show");
    cpuWonWithOMark.classList.remove("cpu-x-show");
    playerWonWithOMark.classList.remove("player-o-show");
    playerWonWithXMark.classList.remove("player-x-show");
  });
});
