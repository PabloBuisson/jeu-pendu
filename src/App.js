import React, { Component } from 'react';
import './App.css';
import Key from './Key.js'
import Word from './Word.js'

const ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const WORD = "ELEPHANT"
const WORDS = ["PIERRE", "FEUILLE", "PAPIER", "CISEAU"]

class App extends Component {
  state = {
    word: this.chooseWord(WORDS),
    filter: this.revealWord(WORD, []),
    usedLetters: [],
    guesses: 0,
  }

  handleLetterClick = letter => {
    // on récupère les propriétés de l'état local
    const { word, guesses, usedLetters } = this.state
    // on prépare les modifs de l'état local : guesses, letters utilisées
    const newGuesses = guesses + 1
    const newUsedLetters = [...usedLetters, ...letter]
    // on modifie l'état local
    this.setState({guesses: newGuesses, usedLetters: newUsedLetters})
    // on verifie si la lettre fait partie du mot + change l'état local
    const newWord = this.revealWord(word, newUsedLetters)
    this.setState({filter: newWord})
  }

  chooseWord(WORDS) {
    return WORDS[Math.floor(Math.random() * WORDS.length)]
  }

  revealWord(filter, usedLetters) { 
    return filter.replace(/\w/g, (letter) => (usedLetters.includes(letter) ? letter : '_')) 
  }

  isWon() {
    const { filter, word } = this.state
    return (filter === word)
  }

  render() {
    const { filter, guesses } = this.state
    const won = this.isWon();
    return (
      <div id="game">
        <p id="guesses">Tentatives : { guesses }</p>
        <hr />
        <div id="word">
          {filter.split("").map((letter, index) => (
            <Word letter={letter} key={index} />
          ))}
        </div>
        <div id="buttons">
          {ALPHABET.map((letter) => (
            <Key 
              entries={ALPHABET} 
              letter={letter} 
              key={letter} 
              feedback="visible" 
              onClick={this.handleLetterClick} 
            />
          )
          )}
        </div>
        {won && <p id="win">GAGNÉ EN {guesses} TENTATIVES !</p>}
      </div>
    );
  }
}

export default App;
