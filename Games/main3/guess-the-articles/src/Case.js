import React from 'react';
import './DoIHaveARight.css';

const Case = ({ caseItem, onSelect }) => {
  return (
    <div className="case" onClick={() => onSelect(caseItem)}>
      <h3>Case #{caseItem.id}</h3>
      <p>{caseItem.description}</p>
    </div>
  );
};

export default Case;
