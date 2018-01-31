
var inquirer = require("inquirer")
var Word = require("./Word.js")
var words = ["harry potter", "gorlum", "berserk", "albus dumbledore"]
var word = ""
var numberOfTriesRemaining
var usersGuessesLetters
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var userGuess = ""
var secretWord = {}
var moreGuessesLeft

initiate()

askUserCheckGuess()

function initiate() {
  numberOfTriesRemaining = 11
  usersGuessesLetters = []
  word = words[Math.floor(Math.random() * words.length)]
  SecretWord = new Word(word)
  SecretWord.generateLetterObjects()
  SecretWord.returnAndShowString()
}



function continueGame() {
  inquirer.prompt([
    {
      type: "list",
      name: "continue",
      message: "Do you want to play the next round, or do you want to quit?",
      choices: ["Next round", "Quit"]
    }
  ]).then(function(answer){
    if (answer.continue === "Next round") {
      initiate()
      askUserCheckGuess()
    } else {
      return
    }
  })
}


function askUserCheckGuess() {

  console.log("")
  console.log("Tries left: ", numberOfTriesRemaining)
  console.log("")
  console.log("Your guesses: ", usersGuessesLetters.join(", "))
  console.log("")


  if (numberOfTriesRemaining > 0) {
    inquirer.prompt([
      {
        name: "user_input",
        message: "Guess a letter: "
      }
    ]).then(function(answer){
        userGuess = answer.user_input.toLowerCase()
          if (alphabet.indexOf(userGuess) > -1) { 
            if (usersGuessesLetters.indexOf(userGuess) > -1) {
              console.log("You have already tried this letter. Try again!")
              SecretWord.returnAndShowString()
              askUserCheckGuess()
            } else {
              usersGuessesLetters.push(userGuess)
              SecretWord.checkCharacter(userGuess)
              SecretWord.returnAndShowString()
              moreGuessesLeft = 0
              SecretWord.wordArray.forEach(function(letterObject){
                if (letterObject.isGuessed) {
                  //correctGuesses++
                } else {
                  return moreGuessesLeft++
                }
              })

              if (moreGuessesLeft > 0) {
                numberOfTriesRemaining--
                askUserCheckGuess()
              } else {
                console.log("You win!")
                continueGame()
              }

            }

          } else {
            console.log("Invalid input! Choose from alphabet. Try again!")
            SecretWord.returnAndShowString()
            askUserCheckGuess()
          }
    }) //end of inq prompt
  } else {
    console.log("You lost!")
    continueGame()
  }
}
