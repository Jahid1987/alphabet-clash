function setClassById(id, className) {
  const element = document.getElementById(id);
  element.classList.add(className);
}

function removeClassById(id, className) {
  const element = document.getElementById(id);
  element.classList.remove(className);
}

function getARandomAlphabet() {
  const allAlphabets = "abcdefghijklmnopqrstuvwxyz";
  return allAlphabets[Math.round(Math.random() * 25)];
}

// Questions for next support session

// const allAlphabets = 'abcdefghijklmnopqrstuvwxyz';
// array[Math.floor(Math.random() * array.length)]
// console.log(allAlphabets[Math.floor(Math.random() * allAlphabets.length)], allAlphabets.length)
// console.log(Math.random() * 25)

// Math.random() always returns a number lower than 1.

// document.addEventListener('keyup', (e)=> {
//     console.log(e.key)
// })
