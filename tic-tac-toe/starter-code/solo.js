const player = document.querySelector(".players-type");
const playerMark = sessionStorage.getItem("selectedMark");
const nextPlayer = sessionStorage.getItem("nextPlayer");
player.innerHTML = playerMark;

const cpu = document.querySelector(".cpu-type");
const cpuMark = sessionStorage.getItem("cpuMark");
cpu.innerHTML = cpuMark;

let whoseTurn = document.querySelector(".players-turn");
const xPlayer = '<img src="../starter-code/assets/icon-x.svg" >';
const oPlayer = '<img src="../starter-code/assets/icon-o.svg">';
const userMark = playerMark === "x" ? xPlayer : oPlayer;
const boxes = Array.from(document.querySelectorAll(".box"));
const getXMark = [];
const getOMark = [];
whoseTurn.innerHTML = xPlayer;
// when user is playing

getEmptyBoxes = () => {
  const availableBoxes = boxes
    .filter((box) => box.innerHTML === "")
    .map((box) => box.id);
  // console.log("as", availableBoxes);
  return availableBoxes;
};
// get Next Player
// TODO:
const getNextPlayer = (whoseTurn, id) => {
  // const whoseTurn = sessionStorage.getItem("nextPlayer");
  pushMarkId(whoseTurn, id);
  console.log("x", getXMark);
  console.log("o", getOMark);
  if (whoseTurn !== userMark) {
    cpuPlay();
  }
};
pushMarkId = (whoseTurn, id) => {
  switch (whoseTurn) {
    case xPlayer:
      getOMark.push(id);
      break;
    case oPlayer:
      getXMark.push(id);
      break;
    default:
      break;
  }
};
const placeMark = (id) => {
  const clickedBox = boxes[id];
  clickedBox.innerHTML = playerMark === "x" ? xPlayer : oPlayer;
  whoseTurn.innerHTML = whoseTurn.innerHTML === oPlayer ? xPlayer : oPlayer;
  getEmptyBoxes();
  // whoseTurn.innerHTML = oPlayer;
  getNextPlayer(whoseTurn.innerHTML, id);
};

// when cpu is x
const cpuPlay = () => {
  // const emptyBoxes = [];
  // const boxesId = boxes.map((ele) => ele.id);
  // boxesId.map((id) => {
  //   if (boxes[id].innerHTML === "") {
  //     emptyBoxes.push(id);
  //   }
  // });
  //cpu generated id
  const cpuId = Math.floor(Math.random() * getEmptyBoxes().length);
  // randomId = emptyBoxes[cpuId].toString();
  // const randomId = `${emptyBoxes[cpuId]}`;
  // const cpuPickedBox = boxes[randomId];

  setTimeout(() => {
    const cpuPickedBox = boxes[cpuId];
    cpuPickedBox.innerHTML = cpuMark === "o" ? oPlayer : xPlayer;
    whoseTurn.innerHTML = whoseTurn.innerHTML === oPlayer ? xPlayer : oPlayer;
    // getNextPlayer(whoseTurn.innerHTML, cpuId);
    // placeMark(cpuId);
  }, 1500);
};

// const isAvailablePosition = (id) => {
//   return boxes[id].innerHTML === "";
// };

window.onload = () => {
  if (playerMark !== "x") {
    cpuPlay();
  }
  // placeMark();
};

//announce winner
const announceOPlayer = document.querySelector(".o-announcer");
announceOPlayer.classList.add("remove-announcer");

const announceXPlayer = document.querySelector(".x-announcer");
announceXPlayer.classList.add("announce-x-player");

const announceTie = document.querySelector(".tie-announcer");
announceTie.classList.add("announce-tie");
// winningCondition
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

// TODO: push placed ids into array
// steps: 1- Two arraays for each mark
//        2- Identify the mark playing
//        3- When mark placed, push id into its array
// do it here

// const get

// run a method on 5th play
// take played mark and use as argument for method
// in the method we check with the various conditions for winning
// when a  point is not the placed mark or is empty, skip else continue to check
// when there is  match, placed mark has won
// when there is not mark. placed mark is no the winner
const getWinner = (ele) => {
  // get id where ele is placed
  const placedIds = ele === "x" ? getXMark : getOMark;
  for (var i; i < winningCondition.length; ++i) {
    const hasAllMarks = placedIds.every((id) =>
      winningCondition[i].includes(id)
    );
    if (hasAllMarks) {
      // show modal
      console.log("winner", ele);
    }
  }
};

// const arr = [];
// const filledBoxes = () => {
//   //generate filled boxes id
//   const filledBoxesArr = boxes.map((ele) => ele.id);
//   filledBoxesArr.map((id) => {
//     if (boxes[id].innerHTML !== "") {
//       arr.push(id);
//     }
//     arr.map((ele1, ele2, ele3) => {
//       if (
//         winningCondition.some((condition) =>
//           condition.every((val) => [ele1, ele2, ele3].includes(val))
//         )
//       ) {
//         if ([ele1, ele2, ele3].every((val) => val === "x")) {
//           // announceXPlayer.classList.remove("announce-x-player");
//         }
//         // Check if all elements in [ele1, ele2, ele3] have the 'oPlayer' player symbol
//         else if ([ele1, ele2, ele3].every((val) => val === "oPlayer")) {
//           // announceOPlayer.classList.remove("announce-o-player");
//         } else {
//           // announceTie.classList.remove("announce-tie");
//         }
//       }
//     });
//   });
//   console.log(arr);
// };

// for (let i = 0; i < winningCondition.length; i++) {
//   if (playerlayers mark meet any of the conditions in the array show the modale)
// }
