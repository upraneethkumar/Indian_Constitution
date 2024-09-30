import React from 'react';
import './DoIHaveARight.css';

const HomePage = ({ onStart }) => {
  return (
    <div className="home-page">
      <h1>Do I Have a Right?</h1>
      <p>Welcome to the game where you learn about your constitutional rights.</p>
      <button className="start-button" onClick={onStart}>Start</button>
    </div>
  );
};

export default HomePage;
