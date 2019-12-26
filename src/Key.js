import React from 'react';
import './Key.css';
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = "_"

const Key = ({ letter, feedback, onClick }) => (
    <button className={`key ${feedback}`} onClick={() => onClick(letter)}>
        <span className="letter">
            { feedback === 'hidden' ? HIDDEN_SYMBOL : letter }
        </span>
    </button>
)

Key.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'visible',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Key;