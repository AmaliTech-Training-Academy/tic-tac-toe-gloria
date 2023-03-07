const playerX = document.querySelector(".x-outline");
const playerO = document.querySelector(".o-outline");

const newSoloGame = document.getElementById("new-solo-btn");
const newMultiGame = document.getElementById("new-multiplayer-btn");

playerX.addEventListener("click", () => {
  // Set the user state to "selected"
  sessionStorage.setItem("xState", "x");
});

playerO.addEventListener("click", () => {
  sessionStorage.setItem("oState", "o");
});

// Add an event listener to button 2
newSoloGame.addEventListener("click", () => {
  // Get the user state from session storage
  const xState = sessionStorage.getItem("xState");
  const oState = sessionStorage.getItem("oState");

  // Check if the user state is "selected"
  if (xState=== "x" || oState === "o") {
    // Navigate to a new page
    window.location.href = "./new-game-solo.html";
  } else {
    // Navigate to the home page
    alert("select user");
  }
});

newMultiGame.addEventListener('click', ()=>{
    const xMark = sessionStorage.getItem("xState");
    const oMark = sessionStorage.getItem("oState")
    if (xMark === "x" || oMark === "o") {
        // Navigate to a new page
        window.location.href = "./new-game-multiplayer.html";
      } else {
        // Navigate to the home page
        alert("select user");
      }
})

