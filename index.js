
var previousWord = document.getElementById('previous-word')
var incorrectLet = document.getElementById('incorrect-letters')
var scoreEl = document.getElementById('score')
var h2 = document.querySelector('h2')

var wins = 0
var losses = 0

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


/*display 10 remaining guesses in remaining-guesses*/

var remainingGuesses = document.getElementById('remaining-guesses');
remainingGuesses.textContent = (10)


document.onkeyup = function(e) {

  h2.textContent = e.key
 
  var key = h2.textContent
  if(key.includes(words, position)) {
    //console.log(e.key)
    randomWord.textContent = (key)
  } 

  var pickWord = words[Math.floor(Math.random() * words.length)]
    
  if (key === words) {
    wins++
    correctLet.textcontent = wins
  } else {
    losses++
    incorrectLet.textContent = losses
  }

  previousWord.textContent = words
  last

}





