import React from 'react';
import './css/Question.css';

function Question({ question }) {
  return (
    <div className="question-container">
      <h2>{question}</h2>
    </div>
  );
}

export default Question;
