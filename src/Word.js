import React from 'react';
import './Word.css';
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = "_"

const Word = ({ letter, feedback }) => (
    <div className={`key ${feedback}`}>
        <span className="letter">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
        </span>
    </div>
)

Word.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'visible',
    ]).isRequired,
}

export default Word;