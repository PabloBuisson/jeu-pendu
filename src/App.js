import React, { Component } from 'react';
import './App.css';
import Key from './Key.js'
import Word from './Word.js'

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const word = "ELEPHANT"

class App extends Component {

  handleLetterClick = (letter) => {
    (word.split("").indexOf(letter) !== -1) && console.log(letter, this);
  }

  render() {
    return (
      <div className="game">
        <div className="word">
          {word.split("").map((letter, index) => (
            <Word letter={letter} key={index} feedback="hidden" />
          ))}
        </div>
        {alphabet.map((letter) => (
          <Key letter={letter} key={letter} feedback="visible" onClick={this.handleLetterClick} />
        )
        )}
      </div>
    );
  }
}

export default App;
