import React, { useState } from 'react';
import Question from './Question';
import TrueFalseButtons from './TrueFalseButtons';
import Score from './Score';
import ResultFeedback from './ResultFeedback';
import NextButton from './NextButton';
import './css/GameScreen.css';

const questionsData = {
  Legislature: [
    { id: 1, question: 'The President can dissolve the Lok Sabha.', answer: true },
    { id: 2, question: 'The Speaker of the Lok Sabha is a member of the Rajya Sabha.', answer: false },
    { id: 3, question: 'The Rajya Sabha has a term of 6 years.', answer: true },
    { id: 4, question: 'The Lok Sabha can be dissolved by the Prime Minister.', answer: false },
    { id: 5, question: 'The Finance Bill must be passed by the Rajya Sabha.', answer: false },
    { id: 6, question: 'A bill can be introduced in either house of Parliament.', answer: true },
    { id: 7, question: 'The maximum strength of Lok Sabha is 552 members.', answer: true },
    { id: 8, question: 'The Parliament can make laws for the whole country.', answer: true },
    { id: 9, question: 'The Rajya Sabha is a permanent house and cannot be dissolved.', answer: true },
    { id: 10, question: 'The Lok Sabha can override the Rajya Sabha\'s decision.', answer: true },
  ],
  Executive: [
    { id: 1, question: 'The Prime Minister is appointed by the President.', answer: true },
    { id: 2, question: 'The Vice President is the leader of the majority party.', answer: false },
    { id: 3, question: 'The Council of Ministers is headed by the President.', answer: false },
    { id: 4, question: 'The Prime Minister can recommend the dissolution of the Lok Sabha.', answer: true },
    { id: 5, question: 'The President has the power to appoint governors of states.', answer: true },
    { id: 6, question: 'The Prime Minister must be a member of either house of Parliament.', answer: true },
    { id: 7, question: 'The President can declare a national emergency.', answer: true },
    { id: 8, question: 'The Prime Minister can be removed by a vote of no confidence.', answer: true },
    { id: 9, question: 'The President is elected by an electoral college.', answer: true },
    { id: 10, question: 'The Cabinet consists of only the Prime Minister.', answer: false },
  ],
  Judiciary: [
    { id: 1, question: 'The Supreme Court of India was established in 1950.', answer: true },
    { id: 2, question: 'Judges of the Supreme Court retire at the age of 70.', answer: false },
    { id: 3, question: 'The Chief Justice of India is appointed by the President.', answer: true },
    { id: 4, question: 'The High Courts are the highest courts in a state.', answer: false },
    { id: 5, question: 'Public Interest Litigation can be filed in the Supreme Court.', answer: true },
    { id: 6, question: 'The Supreme Court can review its own judgments.', answer: true },
    { id: 7, question: 'There are 25 High Courts in India.', answer: true },
    { id: 8, question: 'The Supreme Court has the power to issue writs.', answer: true },
    { id: 9, question: 'The Attorney General of India is appointed by the President.', answer: true },
    { id: 10, question: 'The Supreme Court is composed of only 5 judges.', answer: false },
  ],
  IPC: [
    { id: 1, question: 'Section 302 of IPC deals with punishment for murder.', answer: true },
    { id: 2, question: 'Section 415 of IPC defines cheating.', answer: true },
    { id: 3, question: 'Section 376 of IPC deals with punishment for rape.', answer: true },
    { id: 4, question: 'Section 499 of IPC relates to defamation.', answer: true },
    { id: 5, question: 'Section 403 of IPC addresses criminal breach of trust.', answer: false },
    { id: 6, question: 'Section 34 of IPC deals with acts done by several persons in furtherance of common intention.', answer: true },
    { id: 7, question: 'Section 120B of IPC deals with criminal conspiracy.', answer: true },
    { id: 8, question: 'Section 375 of IPC defines rape.', answer: true },
    { id: 9, question: 'Section 306 of IPC deals with abetment of suicide.', answer: true },
    { id: 10, question: 'Section 498A of IPC is related to dowry harassment.', answer: true },
  ],
  Constitution: [
    { id: 1, question: 'Article 14 provides for equality before the law.', answer: true },
    { id: 2, question: 'The Constitution of India is the supreme law of the land.', answer: true },
    { id: 3, question: 'Article 21 guarantees the right to life and personal liberty.', answer: true },
    { id: 4, question: 'Article 19 guarantees the right to freedom of speech.', answer: true },
    { id: 5, question: 'Article 15 prohibits discrimination on grounds of religion.', answer: true },
    { id: 6, question: 'The Constitution was adopted on 26th January 1950.', answer: true },
    { id: 7, question: 'Article 32 allows individuals to approach the Supreme Court for the enforcement of their rights.', answer: true },
    { id: 8, question: 'The Preamble of the Constitution is not a part of the Constitution.', answer: false },
    { id: 9, question: 'The Constitution provides for a single citizenship for all Indians.', answer: true },
    { id: 10, question: 'The Fundamental Rights are justiciable in nature.', answer: true },
  ],
};

function GameScreen({ difficulty, category, onRestartGame }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (userAnswer) => {
    const currentQuestion = questionsData[category][currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.answer;
    if (isCorrect) {
      setFeedbackMessage('Correct!');
      setScore(score + 1);
    } else {
      setFeedbackMessage('Incorrect.');
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questionsData[category].length) {
      setCurrentQuestionIndex(nextIndex);
      setShowFeedback(false);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="game-screen">
      <h2>{category} Quiz - {difficulty} Level</h2>
      {!gameOver ? (
        <>
          <Question question={questionsData[category][currentQuestionIndex].question} />
          <TrueFalseButtons onAnswer={handleAnswer} />
          {showFeedback && <ResultFeedback message={feedbackMessage} />}
          {showFeedback && <NextButton onNext={handleNextQuestion} />}
        </>
      ) : (
        <div className="game-over">
          <h2>Game Over!</h2>
          <Score score={score} total={questionsData[category].length} />
          <button className="restart-button" onClick={onRestartGame}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default GameScreen;
