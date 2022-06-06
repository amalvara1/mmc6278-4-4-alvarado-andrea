
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
]; 

 
var previousWord = document.getElementById('previous-word')  
var incorrectLet = document.getElementById('incorrect-letters')  
var remainGuess = document.getElementById('remaining-guesses')  
var wordToGuess = document.querySelector('h2')  


remainGuess.textContent = (10)  
var wins = 0;  
var losses = 0; 


 
/*Select a word at random from "words" array*/  
var rand = Math.floor(Math.random() * words.length);  
var randomWord = words[rand];  

 
/*place it in word to guess element w/ letter replaced with underscores*/  
wordToGuess.textContent = (randomWord.replace(/[a-z]/g, '_'))  


document.onkeyup = function(e) {  
//filter keypresses  
var key = e.key.toLowerCase() 


if(randomWord.includes(key)) {  
wordToGuess.textContent = (randomWord.replace(/[a-z]/g, '_')).replace('_',(e.key))  
} else {  
losses++  
incorrectLet.textContent+= (e.key)  
remainGuess.textContent = (10 - losses)
}  


}  
