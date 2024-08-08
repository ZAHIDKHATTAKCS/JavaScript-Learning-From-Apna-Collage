// access box
let boxes = document.querySelectorAll(".box");

// access reset button
let restBtn = document.querySelector("#reset-btn");

// 
let newgamebtn = document.querySelector("#newgm-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

// turn of players
let turn0 = true; // player x , player 0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


// rest game 
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.style.display = 'none';
}

// enable boxes function
const enableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
}}



// now we should add eventlistener

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked!");
    if (turn0) {
      // player 0 turn
      box.innerText = "O";
      turn0 = false;
    } else {
      // player x turn
      box.innerText = "X";
      turn0 = true;
    }
    // disabled button when user clicked same button again it will not pressed again
    box.disabled = "true";

    checkWinner();
  });
});


// disabled boxes when a user wins
const disabledBoxes = () => {
  for(let box of boxes) {
    box.disabled = true;
  }
}


const showWinner = (winner) => {

  msg.innerHTML = "Congratulations, winner is " + winner;
  msgContainer.style.display = "block";
  disabledBoxes();
}


const checkWinner = () => {
  for (let pattern of winPatterns) {

    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            showWinner(pos1val);

        }
    }
  }
};


// when click on new game button so new game will be started 
newgamebtn.addEventListener("click", resetGame);


// when click on reset button so all boxes will be empty and game will be reset
restBtn.addEventListener("click", resetGame);


