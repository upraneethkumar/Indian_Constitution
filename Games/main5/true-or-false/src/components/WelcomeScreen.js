import React, { Component } from 'react';
import './css/WelcomeScreen.css';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: '',
      category: '',
    };

    // Binding methods in the constructor
    this.setDifficulty = this.setDifficulty.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  // Set difficulty when a button is clicked
  setDifficulty(difficulty) {
    this.setState({ difficulty });
    console.log("Difficulty selected:", difficulty);
  }

  // Set category when a button is clicked
  setCategory(category) {
    this.setState({ category });
    console.log("Category selected:", category);
  }

  // Handle the start game logic
  handleStart() {
    const { difficulty, category } = this.state;
    if (difficulty && category) {
      this.props.onStartGame(difficulty, category);  // Pass values to start the game
    } else {
      alert("Please select both difficulty and category.");
    }
  }

  render() {
    const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'];
    const categories = ['Legislature', 'Executive', 'Judiciary','IPC','Constitution'];

    return (
      <div className="welcome-screen">
        <h1>Welcome to the Law Quiz Game</h1>

        <h3>Select Your Difficulty Level</h3>
        <div className="difficulty-buttons">
          {difficultyLevels.map((level, index) => (
            <button key={index} onClick={() => this.setDifficulty(level)}>
              {level}
            </button>
          ))}
        </div>

        <h3>Select Category</h3>
        <div className="category-buttons">
          {categories.map((cat, index) => (
            <button key={index} onClick={() => this.setCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <button className="start-button" onClick={this.handleStart}>
          Start Quiz
        </button>
      </div>
    );
  }
}

export default WelcomeScreen;
