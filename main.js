function handleKeyupEvent(e) {
  const currentAlphabet = document
    .getElementById("currentAlphabet")
    .innerText.toLowerCase();
  // console.log(e.key, currentAlphabet)adsf
  if (e.key === currentAlphabet) {
    removeClassById(currentAlphabet, "bg-orange-400");
    continueGame();

    // 1. get the current score
    const currentScore = parseInt(getTextContentById("current-score"));
    // 2. increase the score by 1
    const newScore = currentScore + 1;
    // 3. show the score in dom
    setTextContentById("current-score", newScore);
  } else {
    // 1. get the current life
    const currentLife = parseInt(getTextContentById("current-life"));
    // 2. decrease life
    const updatedLife = currentLife - 1;
    // 3. show the life
    setTextContentById("current-life", updatedLife);
    //   showing score section
    if (updatedLife < 1) {
      setClassById("play-ground", "hidden");
      removeClassById("score", "hidden");
    }
  }
}

document.addEventListener("keyup", handleKeyupEvent);

function continueGame() {
  const randomAlphabet = getARandomAlphabet();
  const currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.innerText = randomAlphabet;
  setClassById(randomAlphabet, "bg-orange-400");
}

function play() {
  setClassById("home", "hidden");
  removeClassById("play-ground", "hidden");
  continueGame();
}