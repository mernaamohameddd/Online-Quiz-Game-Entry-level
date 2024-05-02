import React, { useState } from 'react';
import { Questions } from './Questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    const correctAnswer = Questions[currentQuestion].answer; // Ensure this is the correct key
  
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
  
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="quiz-app">
      {showResults ? (
        <div className="results">
          <h2>Quiz Completed!</h2>
          <p>
            You scored {score} out of {Questions.length}.
          </p>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>Question {currentQuestion + 1}:</h2>
          <p className="textt">{Questions[currentQuestion].question}</p>
          <ul>
            {Questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerClick(option)}>{option}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;