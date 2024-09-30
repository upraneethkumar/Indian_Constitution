import React from 'react';
import './css/NextButton.css';

function NextButton({ onNext }) {
  return (
    <div className="next-button-container">
      <button onClick={onNext} className="next-button">Next Question</button>
    </div>
  );
}

export default NextButton;
