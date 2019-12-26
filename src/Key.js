import React from 'react';
import './Key.css';

const HIDDEN_SYMBOL = "_"

const Key = ({ letter, feedback }) => (
    <button className={`key ${feedback}`}>
        <span className="letter">
            { feedback === 'hidden' ? HIDDEN_SYMBOL : letter }
        </span>
    </button>
)

export default Key;