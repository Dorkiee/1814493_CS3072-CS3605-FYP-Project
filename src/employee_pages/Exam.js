/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CSS/examCSS.css'
import DashboardNav from "../main_pages/DashboardNav.js";
import emailImage from "./exampictures/test.png";
import axios from 'axios'

class Exam extends Component {
  constructor() {
    super();
    this.state = {
      userData: "",
      username: '',
      examID: '',
      passed: false,
      currentIndex: 0,
      score: 0,
      showAnswer: false,
      selectedOption: null,
    };
 
  this.changeScore = this.changeScore.bind (this)
 }

 componentDidMount() {
  fetch("http://localhost:4000/app/Dashboard", {
      method: "POST",
      crossDomain: true,
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      }, 
      body: JSON.stringify ({
          token: window.localStorage.getItem("token"),
          
      }),
  })
  
  .then((response) => response.json())
  .then((data) => {
      console.log(data, "userData");
      this.setState({ userData: data.data})
  });
 }


changeScore(event) {
  this.setState({
    changeScore:event.target.value
  })
}



  examData = [
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

  handleAnswer = (option) => {
    const { currentIndex, score, selectedOption } = this.state;
    const currentQuestion = this.examData[currentIndex];

    if (option === currentQuestion.answer) {
      this.setState({ score: score + 1 });
    } else if (selectedOption === currentQuestion.answer) { // check if the previously selected option was correct
      this.setState({ score: score - 1 });
    }

    this.setState({ selectedOption: option, showAnswer: true });
  }

  handleNext = () => {
    const { currentIndex } = this.state;
    this.setState({ currentIndex: currentIndex + 1, showAnswer: false });
  }

  handleFinishExam = (event) => {
    event.preventDefault();

    const submitResults = {
      examID: this.state.userData.username,
      passed: this.state.score >= 2,
      score:this.state.score,
  }

  axios.post('http://localhost:4000/app/examinationResults', submitResults)
 .then(response => console.log(response.data))

      this.setState({
          examID: '',
          passed: false,
          score:'',
      })
      


        
  }

  render() {
    const { currentIndex, score, showAnswer, selectedOption } = this.state;
    const currentQuestion = this.examData[currentIndex];
  
    const threshold = 2; // score threshold
  
    if (currentIndex === this.examData.length) {
      let result;
      if (score >= threshold) {
        result = 'pass';
        
      } else {
        result = 'fail';
      }
  
      return (
        <div>
          <nav>
            <div className="wrapper">
              <DashboardNav />
              <div className="main_content">
                <div className="info">
                  <div className="text_content">
                    <div className="mx-auto" style={{ width: '500px' }}>
                      <form>
                        <h1 className="alignC">Exam finished!</h1>
  
                        <p>Your score: {score} / {this.examData.length}</p>
                        <p>Result: {result}</p>
                        <br />
                        <button onClick={this.handleFinishExam}>Finish Exam</button>
                      </form>
                    </div>
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
        <nav>
          <div className="wrapper">
            <DashboardNav />
            <div className="main_content">
              <div className="info">
                <div className="text_content">
                  <div className="mx-auto" style={{ width: '500px' }}>
                    <form>
                      
                      <h2 className="alignC">{currentQuestion.question}</h2>
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
          </div>
        </nav>
      </div>
    );
  }
}  

export default Exam;