import React from 'react';

const Result = ({ score, onRestart }) => {
  return (
    <div className="result-container">
      <h2>Game Over!</h2>
      <p>Your Score: {score}</p>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default Result;
