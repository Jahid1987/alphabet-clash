let score = 0;
let lives = 3;
document.addEventListener("keyup", (event) => {
  const currentAlphabet = document
    .getElementById("currentAlphabet")
    .innerText.toLowerCase();
  if (currentAlphabet === event.key) {
    score++;
  } else {
    lives--;
  }
  setClassById("play-ground", "hidden");
  removeClassById("play-ground", "hidden");
  // console.log(score, lives);
});

function continueGame() {
  const rendomLetter = getARandomAlphabet();
  // set the random letter on the screen
  const currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.textContent = rendomLetter;
  // setting current alphabet a class
  setClassById(rendomLetter, "bg-orange-400");

  // lastRedomLatter && lastRedomLatter !== rendomLetter
  //   ? removeClassById(lastRedomLatter, "bg-orange-400")
  //   : null;
  // lastRedomLatter = rendomLetter;
}

// Play function is being called from home page
function play() {
  setClassById("home", "hidden");
  removeClassById("play-ground", "hidden");
  continueGame();
}
// play();
