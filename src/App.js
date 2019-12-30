import React, { Component } from 'react';
import './App.css';
import Key from './Key.js'
import Word from './Word.js'

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const WORDS = ["PIERRE", "FEUILLE", "PAPIER", "CISEAU"]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.chooseWord(WORDS),
      usedLetters: [],
      guesses: 0,
     }
  }

  chooseWord(WORDS) {
    return WORDS[Math.floor(Math.random() * WORDS.length)];
  }

  revealWord(word, usedLetters) { 
    return word.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : '_')); 
  }

  // Arrow fx for binding
  handleLetterClick = letter => {
    // on récupère les propriétés de l'état local
    const { guesses, usedLetters } = this.state;
    // on prépare les modifs de l'état local : guesses, letters utilisées
    const newGuesses = guesses + 1;
    const newUsedLetters = [...usedLetters, ...letter];
    // on modifie l'état local
    this.setState({guesses: newGuesses, usedLetters: newUsedLetters});
  }

  // Arrow fx for binding
  getLetterFeedback = letter => {
    const { usedLetters } = this.state;

    if (usedLetters.includes(letter)) {
      return 'used';
    }

    return 'clean';
  }

  // remise à 0
  // Arrow fx for binding
  tryAgain = () => {
    this.setState({
      word: this.chooseWord(WORDS),
      usedLetters: [],
      guesses: 0,
    })
  }

  render() {
    const { word, usedLetters, guesses } = this.state;
    const filter = this.revealWord(word, usedLetters);
    const won = (filter === word);
    return (
      <div className="container" id="game">
        <p id="guesses">{won ? `GAGNÉ en ${guesses} tentatives !` :
        `Tentatives : ${guesses}`}
        </p>
        <hr />
        <div id="word">
          {filter.split("").map((letter, index) => (
            <Word letter={letter} key={index} />
          ))}
        </div>
        <div id="buttons">
          {ALPHABET.map((letter) => (
            <Key 
              letter={letter} 
              key={letter} 
              feedback={this.getLetterFeedback(letter)} 
              onClick={this.handleLetterClick} 
            />
          )
          )}
        </div>
        <div className="text-center">
          {won && <button 
                    className="btn btn-primary my-5 mx-auto" 
                    id="try-again" 
                    onClick={this.tryAgain}>
                    Relancer la partie !
                  </button>}
        </div>
      </div>
    );
  }
}

export default App;
