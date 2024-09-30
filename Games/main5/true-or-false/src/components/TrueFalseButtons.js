import React from 'react';
import './css/TrueFalseButtons.css';

function TrueFalseButtons({ onAnswer }) {
  return (
    <div className="buttons-container">
      <button className="true-button" onClick={() => onAnswer(true)}>
        True
      </button>
      <button className="false-button" onClick={() => onAnswer(false)}>
        False
      </button>
    </div>
  );
}

export default TrueFalseButtons;
