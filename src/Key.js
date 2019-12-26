import React from 'react';
import './Key.css';

const HIDDEN_SYMBOL = "_"

const Key = ({ letter, feedback, onClick }) => (
    <button className={`key ${feedback}`} onClick={() => onClick(letter)}>
        <span className="letter">
            { feedback === 'hidden' ? HIDDEN_SYMBOL : letter }
        </span>
    </button>
)

export default Key;