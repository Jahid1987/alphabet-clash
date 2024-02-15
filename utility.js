function getTextContentById(id) {
  const innerText = document.getElementById(id).textContent;
  return innerText;
}

function setTextContentById(id, content) {
  document.getElementById(id).textContent = content;
}

function setClassById(id, className) {
  const element = document.getElementById(id);
  element.classList.add(className);
}

function removeClassById(id, className) {
  const element = document.getElementById(id);
  element.classList.remove(className);
}

function getARandomAlphabet() {
  const allAlphabets = "abcdefghijklmnopqrstuvwxyz"; // why should i split it as i can get every letter by index from string also?
  return allAlphabets[Math.round(Math.random() * 25)];
}
