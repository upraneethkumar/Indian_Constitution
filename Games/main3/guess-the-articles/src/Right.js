import React from 'react';
import './DoIHaveARight.css';

const Right = ({ right, onSelect }) => {
  return (
    <div className="right" onClick={() => onSelect(right)}>
      <h3>{right.title}</h3>
      <p>{right.description}</p>
    </div>
  );
};

export default Right;
