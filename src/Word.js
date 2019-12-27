import React from 'react';
import './Word.css';
import PropTypes from 'prop-types'

//const HIDDEN_SYMBOL = "_"

const Word = ({ letter }) => (
    <div className="key">
        <span className="letter">
            {letter}
        </span>
    </div>
)

Word.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default Word;