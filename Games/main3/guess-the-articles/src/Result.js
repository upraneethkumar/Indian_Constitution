import React from 'react';
import './DoIHaveARight.css';

const Result = ({ isCorrect, selectedArticle, correctArticle }) => {
  return (
    <div className="result">
      <h2>Result</h2>
      {isCorrect ? (
        <p>🎉 Correct! The selected article is: {selectedArticle.title}</p>
      ) : (
        <p>❌ Incorrect. You selected: {selectedArticle.title}, but the correct article was: {correctArticle.title}</p>
      )}
      <p>Explanation: {correctArticle.description}</p>
    </div>
  );
};

export default Result;
