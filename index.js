var previousWord = document.getElementById('previous-word')
var incorrectLet = document.getElementById('incorrect-letters')
var remainGuess = document.getElementById('remaining-guesses')
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



document.onkeyup = function(e){
  //filter keypresses
  //console.log(e.key) // access user's keypress
  h2.textContent = e.key 
  //pick a random word from words array

  //compare picked and random word
  //increment and show correct/incorrect
  //show previous guess, correct/incorrect
  //calculate score
}






