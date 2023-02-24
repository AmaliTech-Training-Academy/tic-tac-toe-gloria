const playerX = document.getElementsByClassName('x-outline');
const playerO = document.getElementsByClassName('o-outline');
let player = document.getElementsByClassName('players-type');

// playerX.addEventListener('click', changePlayer)
// changePlayer = ()=>{
//     let player = document.getElementsByClassName('players-type');
    
// }
if(playerX.onclick()){
    player.innerHTML = playerX
}
else if(playerO.onclick()){
    player.innerHTML = playerO
}