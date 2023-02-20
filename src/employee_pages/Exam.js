/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CSS/examCSS.css'
import DashboardNav from "../main_pages/DashboardNav.js";
import emailImage from "./exampictures/test.png";

const examData = [
  {
    question: 'What is spear fishing?',
    options: ['A.	A type of phishing that involves vacation offers ', 'B.	A type of phishing that promises a large reward', 'C.	A type of phishing that targets specific groups of people in an organisation.', 'D.	A type of phishing that lures the recipient in with a fun offer and then spreads a virus'],
    answer: 'C.	A type of phishing that targets specific groups of people in an organisation.'
  },
  {
    question: 'What is Smishing?',
    options: ['A.	A type of phishing that use text messages to exploit targets mobile devices ', 'B.	A type of phishing that use voice messages to exploit targets mobile devices ', 'C.	A type of phishing directed at high-level executives by masquerade as legitimate emails to encourage a victim to share highly sensitive information', 'D.	All of the above'],
    answer: 'D.	All of the above'
  },
  {
    question: 'Is the email in the image below authentic or a phishing email?',
    image: emailImage,
    options: ['Phish', 'Legit'],
    answer: 'Phish'
  }
];

function Exam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // added state variable to keep track of selected option

  const currentQuestion = examData[currentIndex];

  function handleAnswer(option) {
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    } else if (selectedOption === currentQuestion.answer) { // check if the previously selected option was correct
      setScore(score - 1);
    }
    setSelectedOption(option); // update selected option
    setShowAnswer(true);
  }

  function handleNext() {
    setCurrentIndex(currentIndex + 1);
    setShowAnswer(false);
  }

  const threshold = 2; // score threshold

  if (currentIndex === examData.length) {
    let result;
    if (score >= threshold) {
      result = 'pass';
    } else {
      result = 'fail';
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="wrapper">
        <DashboardNav/>
        <div class="main_content">
        <div class="info">
        <div className="mx-auto" style={{ width: '500px' }}>
      <form className="form-container p-5 mx-auto">
        <h1 className='alignC'>Exam finished!</h1>
        
        <p>Your score: {score} / {examData.length}</p>
        <p>Result: {result}</p>
        </form>
      </div>
      </div>
      </div>
      </div>
      </nav>
      </div>
    );
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div class="wrapper">
        <DashboardNav />
        <div class="main_content">
          <div class="info">
            <div className="mx-auto" style={{ width: '500px' }}>
            <form className="form-container">
              <h2 className='alignC'>{currentQuestion.question}</h2>
              <br />
              {currentQuestion.image && (
                <img src={currentQuestion.image} alt="Exam question" />
              )}
              <br />
              <br />
              <br />
              {currentQuestion.options.map(option => (
                <Form.Check
                  key={option}
                  type="checkbox"
                  label={option}
                  onChange={() => handleAnswer(option)}
                  checked={option === selectedOption}
                />
              ))}
              <br />
              <br />
              {showAnswer && (
                <div>
                  <Button onClick={handleNext}>Next question</Button>
                </div>
              )}
            </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
    
  );
}
  export default Exam;