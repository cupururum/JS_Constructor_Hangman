var Letter = require("./Letters.js")
var returnArrayOfLetters = []

var Word = function(word) {
  this.word = word
  this.wordArray = []
  this.generateLetterObjects = function() {
    var wordArrayReturn = []
    this.word.split("").forEach(function(letter){
      letter = new Letter(letter)
      wordArrayReturn.push(letter)
    })
    this.wordArray = wordArrayReturn
  }
  this.returnAndShowString = function() {
    var returnArrayOfUnderscores = []
    this.wordArray.forEach(function(letterObject) {
      returnArrayOfUnderscores.push(letterObject.displayCorrectLetter())
    })
    console.log(returnArrayOfUnderscores.join(""))
  }
  this.checkCharacter = function(character) {
    for (var i = 0; i < this.wordArray.length; i++) {
      this.wordArray[i].checkGuess(character)
    }
  }
}

module.exports = Word
