import React from "react";
import { useNavigate } from "react-router-dom";

function Result({ score, questions, missedQuestions }) {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/quiz");
  };

  const handleExitGame = () => {
    // Redirect the user to an external website or a homepage
    window.location.href = "https://www.example.com";  // Change to your desired URL
  };

  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {questions.length}</p>

      {missedQuestions.length > 0 && (
        <div>
          <h2>Missed Questions</h2>
          <ul>
            {missedQuestions.map((missed, index) => (
              <li key={index}>
                <strong>Q:</strong> {questions[missed].question} <br />
                <strong>Correct Answer:</strong> {questions[missed].answers[questions[missed].correct]} <br />
                <strong>Explanation:</strong> {questions[missed].explanation}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="button-container">
        <button className="play-again-button" onClick={handlePlayAgain}>Play Again</button>
        <button className="exit-button" onClick={handleExitGame}>Exit</button>
      </div>
    </div>
  );
}

export default Result;
