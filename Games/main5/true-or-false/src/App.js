import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './components/GameScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');

  const startGame = (selectedDifficulty, selectedCategory) => {
    console.log("Game Starting with Difficulty:", selectedDifficulty, "Category:", selectedCategory);
    setDifficulty(selectedDifficulty);
    setCategory(selectedCategory);
    setGameStarted(true);
  };

  const restartGame = () => {
    setGameStarted(false);
    setDifficulty('');
    setCategory('');
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <WelcomeScreen onStartGame={startGame} />
      ) : (
        <GameScreen difficulty={difficulty} category={category} onRestartGame={restartGame} />
      )}
    </div>
  );
}

export default App;
