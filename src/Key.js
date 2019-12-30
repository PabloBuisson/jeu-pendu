import React from 'react';
import './Key.css';
import PropTypes from 'prop-types'

const Key = ({ letter, feedback, onClick }) => (
    <button className={`btn key ${feedback}
            ${feedback === 'clean' ? 'btn-outline-primary' : 'btn-outline-secondary'}`} 
            onClick={() => onClick(letter)}>
        <span className="letter">
            {letter}
        </span>
    </button>
)

Key.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'used',
        'clean',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Key;