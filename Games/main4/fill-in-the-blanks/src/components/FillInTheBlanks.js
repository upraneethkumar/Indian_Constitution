import React, { useState } from 'react';
import './FillInTheBlanks.css';

const FillInTheBlanks = () => {
  // Example sentences with blanks and answers
  const sentences = [
    { sentence: "Article _ provides for equality before the law.", answer: "14" },
    { sentence: "The _ of India is the supreme law of the land.", answer: "Constitution" },
    { sentence: "The _ is the highest authority in India.", answer: "Parliament" },
    { sentence: "The Right to Freedom is enshrined in Article _.", answer: "19" },
    { sentence: "The _ establishes the framework for governance.", answer: "Constitution" },
    { sentence: "Section _ of IPC deals with punishment for murder.", answer: "302" },
    { sentence: "Section _ of IPC defines cheating.", answer: "415" },
    { sentence: "The Right to Life is protected under Article _.", answer: "21" },
    { sentence: "Article _ guarantees the right to freedom of speech.", answer: "19" },
    { sentence: "The _ provides for the right to constitutional remedies.", answer: "Constitution" },
    { sentence: "Section _ of IPC deals with hurt.", answer: "319" },
    { sentence: "Article _ prohibits discrimination on grounds of religion.", answer: "15" },
    { sentence: "Section _ of IPC addresses criminal breach of trust.", answer: "405" },
    { sentence: "The _ establishes the fundamental duties of citizens.", answer: "Constitution" },
    { sentence: "Section _ of IPC defines kidnapping.", answer: "359" },
    { sentence: "The _ safeguards the right to education.", answer: "Constitution" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false); // State to track if game has started

  const handleStart = () => {
    setGameStarted(true); // Start the game
    setCurrentIndex(0); // Reset to first sentence
    setUserInput('');
    setFeedback('');
    setScore(0);
  };

  const handleSubmit = () => {
    const currentSentence = sentences[currentIndex];
    if (userInput.trim().toLowerCase() === currentSentence.answer.toLowerCase()) {
      setFeedback('Correct! 🎉');
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect! The correct answer is "${currentSentence.answer}".`); // Display the correct answer
    }
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput('');
      setFeedback('');
    } else {
      setFeedback(`Game Over! Your score: ${score}/${sentences.length}`);
    }
  };

  const handleRestart = () => {
    setGameStarted(false); // Reset game started state
    setCurrentIndex(0);
    setUserInput('');
    setFeedback('');
    setScore(0);
  };

  const handleExit = () => {
    window.close(); // Close the game window
  };

  return (
    <div className="fill-in-the-blanks">
      <h1>Fill in the Blanks</h1>
      {!gameStarted ? (
        <button onClick={handleStart}>Start Game</button> // Start button
      ) : (
        <>
          <p>{currentIndex < sentences.length ? sentences[currentIndex].sentence.replace('_', '____') : null}</p>
          
          {currentIndex < sentences.length ? (
            <>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Your answer here"
              />
              <button onClick={handleSubmit}>Submit</button>
              <p className="feedback">{feedback}</p>
              <button onClick={handleNext}>Next Blank</button>
            </>
          ) : (
            <div>
              <p>{feedback}</p>
              <h2 style={{ color: 'blue' }}>Your Score: {score}/{sentences.length}</h2>
              <button onClick={handleRestart}>Play Again</button> {/* Play Again button */}
              <button onClick={handleExit}>Exit</button> {/* Exit button */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FillInTheBlanks;
