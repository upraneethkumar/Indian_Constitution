import React from 'react';
import './css/ResultFeedback.css';

function ResultFeedback({ message }) {
  return (
    <div className="feedback-container">
      <h3>{message}</h3>
    </div>
  );
}

export default ResultFeedback;
