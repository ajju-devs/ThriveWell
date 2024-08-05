import React, { useState } from 'react';
import './Surveys.css';

function Surveys() {
  const [responses, setResponses] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [completed, setCompleted] = useState(false);

  const surveyQuestions = [
    "How often do you exercise?",
    "Do you eat a balanced diet?",
    "How many hours of sleep do you get per night?",
    "How often do you visit a healthcare provider?",
    "Do you have access to clean drinking water?",
    "Do you have access to mental health resources?",
    "How often do you feel stressed?",
    "Do you take any vitamin or mineral supplements?",
    "How often do you consume processed foods?",
    "Are you satisfied with your overall health?"
  ];

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    setResponses([...responses, { question: surveyQuestions[currentQuestion], answer }]);
    setAnswer('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < surveyQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(null);
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setResponses([]);
    setCurrentQuestion(0);
    setAnswer('');
    setCompleted(false);
  };

  return (
    <div className="surveys">
      <h2>Health Surveys</h2>
      {currentQuestion !== null ? (
        <div>
          <p>{surveyQuestions[currentQuestion]}</p>
          <input
            type="text"
            value={answer}
            onChange={handleInputChange}
          />
          <button onClick={handleSubmit}>
            {currentQuestion === surveyQuestions.length - 1 ? 'Last Submit' : 'Submit'}
          </button>
        </div>
      ) : completed ? (
        <div>
          <h3>Survey Completed! Here are your responses:</h3>
          <pre>{JSON.stringify(responses, null, 2)}</pre>
          <button onClick={handleRestart}>Take the survey again</button>
        </div>
      ) : null}
    </div>
  );
}

export default Surveys;
