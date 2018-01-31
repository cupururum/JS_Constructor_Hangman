
var Letter = function(letter) {
  this.letter = letter
  this.isGuessed = false
  this.underscore = "_ "
  this.displayCorrectLetter = function() {
    if (this.isGuessed) {
      this.underscore = this.letter + " "
    } else {
        if (this.letter == " ") {
          this.underscore = "\xA0"
          this.isGuessed = true
        }

    }
    return this.underscore
  }
  this.checkGuess = function(character) {
    if (character === this.letter) {
      this.isGuessed = true
    } else {
      //ignore!
    }
  }
}

var NewLetter = new Letter("r")

module.exports = Letter
