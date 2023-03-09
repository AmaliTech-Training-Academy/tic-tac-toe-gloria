const playerX = document.querySelector(".x-outline");
const playerO = document.querySelector(".o-outline");

const newSoloGame = document.getElementById("new-solo-btn");
const newMultiGame = document.getElementById("new-multiplayer-btn");

const playerXSelected = ()=>{
  playerX.addEventListener('click', ()=>{
    playerX.classList.toggle('btn-click');
    sessionStorage.setItem("xState", "x");
  });
}

const playerOSeclected = ()=>{
  playerO.addEventListener('click', ()=>{
    playerO.classList.toggle('btn-click');
    sessionStorage.setItem("oState", "o");
  })
}

playerXSelected()
playerOSeclected()



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

