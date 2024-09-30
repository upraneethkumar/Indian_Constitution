import React from "react";
import { Link } from "react-router-dom";
import './Start.css'; // Assuming you'll have a separate CSS file for Start

function Start() {
  return (
    <div className="start-container">
      <h1 className="title">Welcome to the Indian Constitution Quiz!</h1>
      <p className="description">Test your knowledge of the Indian Constitution and IPC Sections. Are you ready?</p>
      <Link to="/quiz">
        <button className="start-button">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Start;
