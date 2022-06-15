import React from 'react'
import Axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'
import ExA1 from './Ex/exA1'
import ExA2 from './Ex/exA2'
import ExB from './Ex/ExB/ExB';

const API_URL = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";

const App = () => {

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    Axios.get(API_URL)
      .then(res => res.data)
      .then(data => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
        }))
        setQuestions(questions)
      });
  }, [])

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        alert('You get 10 points!!!')
        setScore(score + 10);
      }
      else { 
        alert('You get 0 points!!!')
      }
    }


    setShowAnswers(true);

  }

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    setShowAnswers(false);
  }

  return (
    questions.length > 0 ? (<div className="container">
    {currentIndex >= questions.length ? (
      <h1>Game Ended, Your Score is {score}</h1>) : (<ExB handleAnswer={handleAnswer}
        showAnswers={showAnswers}
        handleNextQuestion={handleNextQuestion}
        data={questions[currentIndex]} />)}

  </div>

  ) : <div className="container">Loading...</div>
  )
}

export default App
