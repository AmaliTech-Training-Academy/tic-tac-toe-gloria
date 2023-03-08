const playerX = document.querySelector(".x-outline");
const playerO = document.querySelector(".o-outline");

const Players = document.querySelectorAll('player-outline');
const playerPath = document.querySelectorAll("player-class")

const newSoloGame = document.getElementById("new-solo-btn");
const newMultiGame = document.getElementById("new-multiplayer-btn");

Players.forEach(player=>{
  player.addEventListener('click', ()=>{
    Players.forEach(player => {
      player.classList.remove('clicked')
    });
    player.classList.add('clicked');
  })
})

playerX.addEventListener("click", () => {
  // Set the user state to "selected"
  sessionStorage.setItem("xState", "x");
});

playerO.addEventListener("click", () => {
  // playerO.classList.add("clicked")
  sessionStorage.setItem("oState", "o");
});



newSoloGame.addEventListener("click", () => {
  const xState = sessionStorage.getItem("xState");
  const oState = sessionStorage.getItem("oState");

  // Check if the user state is "selected"
  if (xState=== "x" || oState === "o") {
    // Navigate to a new page
    window.location.href = "./new-game-solo.html";
  } else {
    alert("select user");
  }
});

newMultiGame.addEventListener('click', ()=>{
    const xMark = sessionStorage.getItem("xState");
    const oMark = sessionStorage.getItem("oState")
    if (xMark === "x" || oMark === "o") {
        window.location.href = "./new-game-multiplayer.html";
      } else {
        alert("select user");
      }
})

