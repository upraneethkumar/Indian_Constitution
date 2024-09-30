import React, { useState, useEffect } from 'react';
import './App.css';

const articles = {
  "Article 14": "Equality before law",
  "Article 19": "Protection of certain rights regarding freedom of speech",
  "Article 21": "Protection of life and personal liberty",
  "Article 32": "Remedies for enforcement of rights",
  "Article 44": "Uniform Civil Code",
  "Article 51A": "Fundamental duties",
  "Article 15": "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth",
  "Article 16": "Equality of opportunity in matters of public employment",
};

function App() {
  const [pairs, setPairs] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [message, setMessage] = useState('');

  // Function to shuffle and return the pairs of articles and summaries
  const getShuffledPairs = () => {
    const keys = Object.keys(articles);
    const values = Object.values(articles);
    const combined = [...keys, ...values];
    return combined
      .map(value => ({ value, flipped: false, matched: false })) // wrap with card data
      .sort(() => Math.random() - 0.5); // shuffle
  };

  // Start or reset the game
  const startGame = () => {
    setPairs(getShuffledPairs());
    setFlippedCards([]);
    setMatches(0);
    setGameStarted(true);
    setMessage('');
  };

  const flipCard = (index) => {
    const newPairs = [...pairs];

    // If the card is already flipped or matched, do nothing
    if (newPairs[index].flipped || newPairs[index].matched) return;

    // Flip the card
    newPairs[index].flipped = true;
    const newFlippedCards = [...flippedCards, { ...newPairs[index], index }];
    setFlippedCards(newFlippedCards);
    setPairs(newPairs);

    // Check for a match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setTimeout(() => checkMatch(newFlippedCards), 500);
    }
  };

  const checkMatch = (flippedCards) => {
    const [card1, card2] = flippedCards;
    const newPairs = [...pairs];

    if (
      (articles[card1.value] === card2.value) ||
      (articles[card2.value] === card1.value)
    ) {
      // Mark as matched
      newPairs[card1.index].matched = true;
      newPairs[card2.index].matched = true;
      setMatches(matches + 1);

      if (matches + 1 === Object.keys(articles).length) {
        setMessage("Congratulations! You've matched all the articles and summaries!");
      }
    } else {
      // Flip them back if no match
      newPairs[card1.index].flipped = false;
      newPairs[card2.index].flipped = false;
    }

    setPairs(newPairs);
    setFlippedCards([]);
  };

  return (
    <div className="App">
      <h1>Indian Constitution Article Matching Game</h1>
      {!gameStarted && (
        <button onClick={startGame}>Start Game</button>
      )}
      {gameStarted && (
        <>
          <button onClick={startGame}>Play Again</button>
          <button onClick={() => window.close()}>Exit</button>

          <div className="game-board">
            {pairs.map((pair, index) => (
              <div
                key={index}
                className={`card ${pair.flipped ? 'flipped' : ''} ${pair.matched ? 'matched' : ''}`}
                onClick={() => flipCard(index)}
              >
                {pair.flipped || pair.matched ? pair.value : '?'}
              </div>
            ))}
          </div>

          {message && <div id="message">{message}</div>}
        </>
      )}
    </div>
  );
}

export default App;
