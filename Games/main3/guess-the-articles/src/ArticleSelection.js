import React, { useState } from 'react';
import './DoIHaveARight.css';

const ArticleSelection = ({ rights, selectedCase, onSubmit }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (right) => {
    setSelectedArticle(right);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    onSubmit(selectedArticle); // Pass the selected article to parent
  };

  return (
    <div className="article-selection">
      <h2>Select the Article for the Case</h2>
      <p>{selectedCase.description}</p>
      <div className="right-list">
        {rights && rights.length > 0 ? (
          rights.map((right) => (
            <button
              key={right.id}
              className={`right-button ${selectedArticle === right ? 'selected' : ''}`}
              onClick={() => handleSelect(right)}
            >
              {right.title}
            </button>
          ))
        ) : (
          <p>No rights available</p>
        )}
      </div>
      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit} disabled={!selectedArticle}>
          Submit
        </button>
      ) : (
        <div className="result-reveal">
          <p>{selectedArticle.title}: {selectedArticle.description}</p>
        </div>
      )}
    </div>
  );
};

export default ArticleSelection;
