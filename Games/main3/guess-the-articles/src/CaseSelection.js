import React from 'react';
import './DoIHaveARight.css';

const CaseSelection = ({ cases, onSelectCase }) => {
  return (
    <div className="case-selection">
      <h2>Select a Case</h2>
      <div className="case-list">
        {cases && cases.length > 0 ? (
          cases.map((caseItem) => (
            <button key={caseItem.id} className="case-button" onClick={() => onSelectCase(caseItem)}>
              {caseItem.description}
            </button>
          ))
        ) : (
          <p>No cases available</p>
        )}
      </div>
    </div>
  );
};

export default CaseSelection;
