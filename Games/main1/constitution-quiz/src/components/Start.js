import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      <h1>Welcome to the Indian Constitution Quiz!</h1>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}

export default Start;
