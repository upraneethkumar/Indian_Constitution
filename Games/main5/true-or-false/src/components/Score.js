import React from 'react';
import './css/Score.css';

function Score({ score, total }) {
  return (
    <div className="score-container">
      <h3>Your Score: {score} / {total}</h3>
    </div>
  );
}

export default Score;
