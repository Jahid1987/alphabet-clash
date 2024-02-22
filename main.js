const successMsg = new Audio();
successMsg.src = "../audio/success.mp3";
const errorMsg = new Audio();
errorMsg.src = "../audio/error.wav";
let isPlayOn = false;

const artBoard = document.getElementById('art-board');

function handleKeyupEvent(e) {
  if (!isPlayOn) return;
  const currentAlphabet = document
    .getElementById("currentAlphabet")
    .innerText.toLowerCase();
  if (e.key === currentAlphabet) {
    removeClassById(currentAlphabet, "bg-orange-400");
    continueGame();

    // 1. get the current score
    const currentScore = parseInt(getTextContentById("current-score"));
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    // 3. show the score in dom
    setTextContentById("current-score", newScore);
    successMsg.play();
  } else {
    // 1. get the current life
    const currentLife = parseInt(getTextContentById("current-life"));
    // 2. decrease life
    const updatedLife = currentLife - 1;
    // 3. show the life
    setTextContentById("current-life", updatedLife);
    errorMsg.play();
    // color change of art board 
    const updatedLifePercentage = (updatedLife/5) * 100;
    artBoard.style.background =  `linear-gradient(to bottom, #fffc ${updatedLifePercentage}%, red)`;
    //   showing score section
    if (updatedLife < 1 || e.key === "Escape") {
      removeClassById(currentAlphabet, "bg-orange-400");
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyupEvent);

function continueGame() {
  const randomAlphabet = getARandomAlphabet();
  const currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.innerText = randomAlphabet;
  setClassById(randomAlphabet, "bg-orange-400");
  isPlayOn = true;
}

function play() {
  // hide all section without playground
  setClassById("home", "hidden");
  setClassById("score", "hidden");
  removeClassById("play-ground", "hidden");
  //   resetting the value of life and score
  setTextContentById("current-life", 5);
  setTextContentById("current-score", 0);
  continueGame();
}

function gameOver() {
  setClassById("play-ground", "hidden");
  removeClassById("score", "hidden");
  // setting final score
  const finalScore = getTextContentById("current-score");
  setTextContentById("final-score", finalScore);
  isPlayOn = false;
  artBoard.style.background = 'linear-gradient(to bottom, #fffc 100%, red)'
}

// Modal section 
function modalOpen(e){
  console.log(e.clientY)
}
document.body.onmouseover = modalOpen;
