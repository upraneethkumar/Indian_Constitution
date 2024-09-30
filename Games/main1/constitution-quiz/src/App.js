import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import './App.css';


function App() {
  const [questions] = useState([
    {
      question: "What is the preamble of the Indian Constitution?",
      answers: ["An introduction", "A set of laws", "A legal document", "A ruling"],
      correct: 0,
      explanation: "The Preamble is the introductory statement to the Indian Constitution."
    },
    {
      question: "Which article of the Constitution abolishes untouchability?",
      answers: ["Article 14", "Article 15", "Article 17", "Article 19"],
      correct: 2,
      explanation: "Article 17 abolishes untouchability and forbids its practice."
    },
    {
      question: "Which article of the Indian Constitution guarantees Freedom of Speech?",
      answers: ["Article 19", "Article 21", "Article 32", "Article 44"],
      correct: 0,
      explanation: "Article 19(1)(a) guarantees the right to freedom of speech and expression."
    },
    {
      question: "Which IPC section defines punishment for murder?",
      answers: ["IPC Section 302", "IPC Section 307", "IPC Section 376", "IPC Section 124A"],
      correct: 0,
      explanation: "Section 302 of the IPC deals with the punishment for murder."
    },
    {
      question: "Which IPC section deals with defamation?",
      answers: ["IPC Section 498A", "IPC Section 499", "IPC Section 354", "IPC Section 503"],
      correct: 1,
      explanation: "Section 499 of the IPC defines defamation."
    },
    {
      question: "Which IPC section deals with the punishment for rape?",
      answers: ["IPC Section 302", "IPC Section 307", "IPC Section 376", "IPC Section 124A"],
      correct: 2,
      explanation: "Section 376 of the IPC deals with the punishment for rape."
    },
    {
      question: "Which article of the Indian Constitution is related to the Right to Constitutional Remedies?",
      answers: ["Article 21", "Article 32", "Article 44", "Article 51"],
      correct: 1,
      explanation: "Article 32 allows individuals to move to the Supreme Court to enforce their fundamental rights."
    },
    {
      question: "Which IPC section deals with sedition?",
      answers: ["IPC Section 124A", "IPC Section 302", "IPC Section 304", "IPC Section 149"],
      correct: 0,
      explanation: "Section 124A of the IPC defines sedition."
    },
    {
      question: "Which article of the Indian Constitution is related to the Right to Life?",
      answers: ["Article 14", "Article 21", "Article 44", "Article 370"],
      correct: 1,
      explanation: "Article 21 guarantees the right to life and personal liberty."
    }
  ]);

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState([]);

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setMissedQuestions([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              questions={questions}
              score={score}
              setScore={setScore}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              missedQuestions={missedQuestions}
              setMissedQuestions={setMissedQuestions}
            />
          }
        />
        <Route
          path="/result"
          element={<Result score={score} questions={questions} missedQuestions={missedQuestions} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
