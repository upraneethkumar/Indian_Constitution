import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import CaseSelection from './CaseSelection';
import ArticleSelection from './ArticleSelection';
import Result from './Result';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [resultPage, setResultPage] = useState(false);

  const cases = [
    { id: 1, description: "A person is not allowed to vote based on their gender", correctArticleId: 2 },
    { id: 2, description: "A newspaper is being censored for publishing critical articles about the government", correctArticleId: 19 },
    { id: 3, description: "A citizen is discriminated against based on their caste in accessing public services", correctArticleId: 15 },
    { id: 4, description: "A person is imprisoned without any legal proceedings", correctArticleId: 22 },
    { id: 5, description: "A citizen's house is searched without a warrant", correctArticleId: 21 },
    { id: 6, description: "A person is accused of a crime but denied legal representation", correctArticleId: 39 },
    { id: 7, description: "A citizen is denied employment due to their religious beliefs", correctArticleId: 25 },
    { id: 8, description: "A factory is causing severe pollution, affecting public health", correctArticleId: "48A" }, // Corrected here
    { id: 9, description: "A person is arrested for no reason and is not produced before a magistrate within 24 hours", correctArticleId: 22 },
    { id: 10, description: "A criminal is given the death sentence without the possibility of appeal", correctArticleId: 21 },
  ];  
  

  const rights = [
    { id: 14, title: "Article 14", description: "Right to Equality" },
    { id: 19, title: "Article 19", description: "Freedom of Speech and Expression" },
    { id: 21, title: "Article 21", description: "Right to Life and Personal Liberty" },
    { id: 22, title: "Article 22", description: "Protection Against Arrest and Detention in Certain Cases" },
    { id: 15, title: "Article 15", description: "Prohibition of Discrimination on Grounds of Religion, Race, Caste, Sex, or Place of Birth" },
    { id: 39, title: "Article 39", description: "Equal Justice and Free Legal Aid" },
    { id: 25, title: "Article 25", description: "Freedom of Religion" },
    { id: "48A", title: "Article 48A", description: "Protection and Improvement of Environment" },  // Corrected here
    { id: 17, title: "Article 17", description: "Abolition of Untouchability" },
    { id: 32, title: "Article 32", description: "Right to Constitutional Remedies" },
  ];
  

  const handleStartGame = () => {
    setCurrentPage('caseSelection');
  };

  const handleCaseSelect = (selectedCase) => {
    setSelectedCase(selectedCase);
    setCurrentPage('articleSelection');
  };

  const handleSubmit = (selectedArticle) => {
    setSelectedArticle(selectedArticle);
    const correctArticle = rights.find(article => article.id === selectedCase.correctArticleId);
    if (selectedArticle.id === correctArticle.id) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setResultPage(true); // Switch to result page after submission
  };

  const handleRestart = () => {
    // Restart should take the user back to case selection
    setSelectedCase(null);
    setSelectedArticle(null);
    setIsCorrect(false);
    setResultPage(false);
    setCurrentPage('caseSelection');
  };

  const handleExit = () => {
    // Exit can navigate to home or clear everything to simulate "exit"
    setSelectedCase(null);
    setSelectedArticle(null);
    setIsCorrect(false);
    setResultPage(false);
    setCurrentPage('home');
  };

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage onStart={handleStartGame} />}
      {currentPage === 'caseSelection' && <CaseSelection cases={cases || []} onSelectCase={handleCaseSelect} />}
      {currentPage === 'articleSelection' && (
        <ArticleSelection
          rights={rights || []}
          selectedCase={selectedCase}
          onSubmit={handleSubmit}
        />
      )}
      {resultPage && (
        <Result
          isCorrect={isCorrect}
          selectedArticle={selectedArticle}
          correctArticle={rights.find(article => article.id === selectedCase.correctArticleId)}
        />
      )}
      {resultPage && (
        <div>
          <button className="restart-button" onClick={handleRestart}>Restart</button>
          <button className="exit-button" onClick={handleExit}>Exit</button>
        </div>
      )}
    </div>
  );
};

export default App;
