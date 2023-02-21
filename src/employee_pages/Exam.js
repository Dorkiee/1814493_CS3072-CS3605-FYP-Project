import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CSS/examCSS.css';
import DashboardNav from "../main_pages/DashboardNav.js";
import emailImage from "./exampictures/test.png";
import { withRouter } from 'react-router-dom';

const examData = [
  {
    question: 'What is spear fishing?',
    options: ['A. A type of phishing that involves vacation offers', 'B. A type of phishing that promises a large reward', 'C. A type of phishing that targets specific groups of people in an organisation.', 'D. A type of phishing that lures the recipient in with a fun offer and then spreads a virus'],
    answer: 'C. A type of phishing that targets specific groups of people in an organisation.'
  },
  {
    question: 'What is Smishing?',
    options: ['A. A type of phishing that use text messages to exploit targets mobile devices', 'B. A type of phishing that use voice messages to exploit targets mobile devices', 'C. A type of phishing directed at high-level executives by masquerade as legitimate emails to encourage a victim to share highly sensitive information', 'D. All of the above'],
    answer: 'D. All of the above'
  },
  {
    question: 'Is the email in the image below authentic or a phishing email?',
    image: emailImage,
    options: ['Phish', 'Legit'],
    answer: 'Phish'
  }
];
class Exam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      score: 0,
      showAnswer: false,
      selectedOption: null, // added state variable to keep track of selected option
    };
    this.currentQuestion = examData[this.state.currentIndex];
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleAnswer(option) {
    if (option === this.currentQuestion.answer) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }));
    } else if (this.state.selectedOption === this.currentQuestion.answer) { // check if the previously selected option was correct
      this.setState(prevState => ({
        score: prevState.score - 1,
      }));
    }
    this.setState({
      selectedOption: option, // update selected option
      showAnswer: true,
    });
  }

  handleNext() {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      showAnswer: false,
    }));
    this.currentQuestion = examData[this.state.currentIndex];
  }

  render() {
    const { currentIndex, score, showAnswer, selectedOption } = this.state;
    const currentQuestion = examData[currentIndex];

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
                      <br></br>
                      <button>Finish Exam</button>
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
                        onChange={() => this.handleAnswer(option)}
                        checked={option === selectedOption}
                      />
                    ))}
                    <br />
                    <br />
                    {showAnswer && (
                      <div>
                        <Button onClick={this.handleNext}>Next question</Button>
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
}

export default Exam;