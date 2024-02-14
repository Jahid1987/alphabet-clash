function continueGame() {
  let lastRedomLatter = "";
  setInterval(() => {
    const rendomLetter = getARandomAlphabet();
    
    // set the random letter in the screen
    const currentAlphabet = document.getElementById("currentAlphabet");
    currentAlphabet.textContent = rendomLetter;

    // setting current alphabet a class
    setClassById(rendomLetter, "bg-orange-400");
    lastRedomLatter && lastRedomLatter !== rendomLetter
      ? removeClassById(lastRedomLatter, "bg-orange-400")
      : null;

    lastRedomLatter = rendomLetter;
  }, 1000);
}
function play() {
  setClassById("home", "hidden");
  removeClassById("play-ground", "hidden");
  continueGame();
}
