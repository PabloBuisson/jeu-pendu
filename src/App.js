import React, { Component } from 'react';
import './App.css';
import Key from './Key.js'
import Word from './Word.js'

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const WORD = "ELEPHANT"

class App extends Component {
  state = {
    word: this.revealWord(WORD, []),
    usedLetters: [],
    guesses: 0,
  }

  handleLetterClick = letter => {
    // on récupère les propriétés de l'état local
    const { guesses, usedLetters } = this.state
    // on prépare les modifs de l'état local : guesses, letters utilisées
    const newGuesses = guesses + 1
    const newUsedLetters = [...usedLetters, ...letter]
    // on modifie l'état local
    this.setState({guesses: newGuesses, usedLetters: newUsedLetters})
    // on verifie si la lettre fait partie du mot + change l'état local
    const newWord = this.revealWord(WORD, newUsedLetters)
    this.setState({word: newWord})
  }

  revealWord(word, usedLetters) { 
    return word.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : '_')) 
  }

  render() {
    const { word, guesses } = this.state
    return (
      <div id="game">
        <div id="guesses">{ guesses }</div>
        <div id="word">
          {word.split("").map((letter, index) => (
            <Word letter={letter} key={index} />
          ))}
        </div>
        {ALPHABET.map((letter) => (
          <Key letter={letter} key={letter} feedback="visible" onClick={this.handleLetterClick} />
        )
        )}
      </div>
    );
  }
}

export default App;
