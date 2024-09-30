import React from "react";
import { useNavigate } from "react-router-dom";
import './Quiz.css'; // Assuming you create a separate CSS file for the quiz

function Quiz({
  questions,
  score,
  setScore,
  currentQuestion,
  setCurrentQuestion,
  missedQuestions,
  setMissedQuestions,
}) {
  const navigate = useNavigate();

  const handleAnswerClick = (answerIndex) => {
    const question = questions[currentQuestion];

    if (answerIndex === question.correct) {
      setScore(score + 1);
    } else {
      setMissedQuestions([...missedQuestions, currentQuestion]);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-question">
        <h2>{questions[currentQuestion].question}</h2>
      </div>
      <div className="quiz-answers">
        {questions[currentQuestion].answers.map((answer, index) => (
          <button 
            className="answer-button" 
            key={index} 
            onClick={() => handleAnswerClick(index)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
