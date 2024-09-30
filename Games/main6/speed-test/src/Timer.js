import React from 'react';

const Timer = ({ timeRemaining }) => {
  return (
    <div className="timer">
      Time Remaining: {timeRemaining} seconds
    </div>
  );
};

export default Timer;
