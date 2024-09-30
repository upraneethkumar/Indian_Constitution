import React, { Component } from 'react';
import Question from './Question';
import Timer from './Timer';
import Score from './Score';
import Result from './Result';
import './SpeedTest.css';

class App extends Component {
  state = {
    questions: [
      { question: "Article 21 guarantees:", options: ["Right to Life", "Right to Equality", "Right to Freedom", "Right to Education"], answer: "Right to Life" },
      { question: "The President is elected for a term of:", options: ["4 years", "5 years", "6 years", "3 years"], answer: "5 years" },
      { question: "Right to Freedom of Speech is guaranteed under:", options: ["Article 19", "Article 20", "Article 21", "Article 22"], answer: "Article 19" },
      { question: "The Constitution of India came into effect on:", options: ["26th January 1950", "15th August 1947", "26th November 1949", "1st January 1950"], answer: "26th January 1950" },
      // IPC Section Questions
      { question: "Section 302 of IPC deals with:", options: ["Punishment for Murder", "Punishment for Theft", "Punishment for Cheating", "Punishment for Kidnapping"], answer: "Punishment for Murder" },
      { question: "Section 415 of IPC defines:", options: ["Cheating", "Theft", "Robbery", "Murder"], answer: "Cheating" },
      { question: "Section 375 of IPC defines:", options: ["Rape", "Robbery", "Assault", "Kidnapping"], answer: "Rape" },
      { question: "Section 406 of IPC deals with:", options: ["Criminal Breach of Trust", "Murder", "Assault", "Hurt"], answer: "Criminal Breach of Trust" },
      { question: "Section 359 of IPC defines:", options: ["Kidnapping", "Theft", "Murder", "Assault"], answer: "Kidnapping" },
      // Additional Constitution Article Questions
      { question: "Article 14 ensures:", options: ["Right to Equality", "Right to Life", "Right to Education", "Right to Freedom"], answer: "Right to Equality" },
      { question: "Article 19 provides for:", options: ["Freedom of Speech", "Right to Privacy", "Right to Education", "Right to Equality"], answer: "Freedom of Speech" },
      { question: "Article 32 allows citizens to:", options: ["Approach the Supreme Court", "Approach the High Court", "Approach the District Court", "None of the above"], answer: "Approach the Supreme Court" },
      { question: "Article 51A lists:", options: ["Fundamental Duties", "Fundamental Rights", "Directive Principles", "Constitutional Remedies"], answer: "Fundamental Duties" },
      { question: "Article 19(1)(a) provides for:", options: ["Freedom of Speech", "Freedom of Assembly", "Freedom of Association", "Right to Move freely"], answer: "Freedom of Speech" },
    ],
    currentQuestionIndex: 0,
    score: 0,
    timeRemaining: 30,
    isGameOver: false,
    timer: null,
    gameStarted: false,
  };

  componentDidMount() {
    // Start the timer only if the game has started
    if (this.state.gameStarted) {
      this.startTimer();
    }
  }

  startTimer = () => {
    const timer = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.timeRemaining <= 1) {
          clearInterval(timer);
          return { isGameOver: true, timeRemaining: 0 }; // Ensure timeRemaining is set to 0
        }
        return { timeRemaining: prevState.timeRemaining - 1 };
      });
    }, 1000);
    this.setState({ timer }); // Save the timer reference to clear it later
  };

  handleAnswer = (selectedOption) => {
    const { questions, currentQuestionIndex, score } = this.state;
    if (selectedOption === questions[currentQuestionIndex].answer) {
      this.setState({ score: score + 1 });
    }
    if (currentQuestionIndex < questions.length - 1) {
      this.setState({ currentQuestionIndex: currentQuestionIndex + 1 });
    } else {
      this.setState({ isGameOver: true });
    }
  };

  restartGame = () => {
    this.setState({
      currentQuestionIndex: 0,
      score: 0,
      timeRemaining: 30,
      isGameOver: false,
      gameStarted: false,
    });
  };

  startGame = () => {
    this.setState({
      gameStarted: true,
      currentQuestionIndex: 0,
      score: 0,
      timeRemaining: 30,
      isGameOver: false,
    });
    this.startTimer();
  };

  exitGame = () => {
    // Logic to exit the game, e.g., navigate away or close the app
    alert("Exiting the game...");
  };

  render() {
    const { questions, currentQuestionIndex, score, timeRemaining, isGameOver, gameStarted } = this.state;

    return (
      <div className="game-container">
        <h1>Speed Test Game</h1>
        {gameStarted ? (
          <>
            <Timer timeRemaining={timeRemaining} />
            <Score score={score} />
            {isGameOver ? (
              <Result score={score} onRestart={this.restartGame} />
            ) : (
              <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={this.handleAnswer}
              />
            )}
          </>
        ) : (
          <div>
            <button onClick={this.startGame}>Start Game</button>
            <button onClick={this.exitGame}>Exit Game</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
