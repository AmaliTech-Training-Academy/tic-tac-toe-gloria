const playerX = document.querySelector(".x-outline");
const playerO = document.querySelector(".o-outline");

const newSoloGame = document.getElementById("new-solo-btn");
const newMultiGame = document.getElementById("new-multiplayer-btn");

playerX.addEventListener("click", () => {
  playerO.classList.remove("btn-click");
  playerX.classList.toggle("btn-click");
  sessionStorage.setItem("selectedMark", "x");
  sessionStorage.setItem("cpuMark", "o");
});

playerO.addEventListener("click", () => {
  playerX.classList.remove("btn-click");
  playerO.classList.toggle("btn-click");
  sessionStorage.setItem("selectedMark", "o");
  sessionStorage.setItem("cpuMark", "x");
});

newSoloGame.addEventListener("click", () => {
  const selectedMark = sessionStorage.getItem("selectedMark");

  // Check if the user state is "selected"
  if (selectedMark) {
    sessionStorage.setItem("nextPlayer", "x");
    // Navigate to a new page
    window.location.href = "./new-game-solo.html";
  } else {
    alert("select a mark");
  }
});

newMultiGame.addEventListener("click", () => {
  const selectedMark = sessionStorage.getItem("selectedMark");
  if (selectedMark) {
    window.location.href = "./new-game-multiplayer.html";
  } else {
    alert("select a mark");
  }
});
