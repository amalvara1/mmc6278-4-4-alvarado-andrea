var previousWord = document.getElementById('previous-word')
var incorrectLet = document.getElementById('incorrect-letters')
var remainGuess = document.getElementById('remaining-guesses')
var h2 = document.querySelector('h2')

var wins = 0
var losses = 0

remainGuess.textContent = (10)


var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

/*Select a word at random from "words" array*/
var random_index = Math.floor(Math.random() * words.length);
var randomWord = words[random_index];


/*place it in word to guess element w/ letter replaced with underscores*/

var wordToGuess = document.querySelector('h2')
wordToGuess.textContent = (randomWord.replace(/[a-z]/g, '_'))


document.onkeyup = function(e) {
  //filter keypresses
  var key = e.key.toLowerCase()
  if(randomWord.includes(key)) {
    wordToGuess.textContent = (randomWord.replace(/[a-z]/g, '_')).replace('_',(e.key))
  } else {
    losses++
    incorrectLet.textContent+= '${e.key}'
    remainGuess.textContent = (10 - losses)
  }
  //pick random word from array
}









