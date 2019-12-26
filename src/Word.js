import React from 'react';
import './Word.css';

const HIDDEN_SYMBOL = "_"

const Word = ({ letter, feedback }) => (
    <div className={`key ${feedback}`}>
        <span className="letter">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
        </span>
    </div>
)

export default Word;