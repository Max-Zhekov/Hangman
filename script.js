let words = [
  'jaVascript',
  'Monkey',
  'amAzing',
  'pancAke',
  'Book',
  'kEyboard',
  'aPple',
  'mOnitor'
]
let word = words[Math.floor(Math.random() * words.length)].toLowerCase()
let answerArray = []
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_'
}

let remainingLetters = word.length
let lives = 10
let found = false

while (remainingLetters > 0 && lives > 0) {
  alert(answerArray.join(" "))
  let guess = prompt("Guess a letter, or click cancel to stop playing, you have " + lives + ' lives').toLowerCase()
  if (guess === null) {
    alert("You stop game. Correct word was a " + word)
    break
  } else if (guess.length !== 1) {
    alert("Please enter a single letter")
  } else {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === '_') {
        answerArray[j] = guess
        remainingLetters--
        found = true
      }
    }
    if (!found) {
      lives--
      alert("Wrong guess! Lives left: " + lives)
    }
  }
}
if (word === answerArray.join("")) {
  alert("Good job! The answer was " + word)
}
