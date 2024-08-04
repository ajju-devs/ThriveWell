import React, { useState } from 'react';
import './Quizzes.css';

const questions = [
  {
    question: 'What is the recommended amount of exercise per week for adults?',
    options: [
      '150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise',
      '60 minutes of moderate-intensity exercise per day',
      '120 minutes of vigorous-intensity exercise per week',
      '30 minutes of exercise per day'
    ],
    correct: 0
  },
  {
    question: 'Which vitamin is essential for maintaining healthy skin?',
    options: [
      'Vitamin A',
      'Vitamin B12',
      'Vitamin C',
      'Vitamin D'
    ],
    correct: 0
  },
  {
    question: 'What is the recommended daily intake of water for an average adult?',
    options: [
      '8 glasses (about 2 liters)',
      '5 glasses (about 1.5 liters)',
      '10 glasses (about 2.5 liters)',
      '12 glasses (about 3 liters)'
    ],
    correct: 0
  },
  {
    question: 'How many servings of fruits and vegetables should you aim for daily?',
    options: [
      '5 servings',
      '3 servings',
      '7 servings',
      '10 servings'
    ],
    correct: 0
  },
  {
    question: 'What is a healthy range for body mass index (BMI)?',
    options: [
      '18.5 to 24.9',
      '25 to 29.9',
      '30 to 34.9',
      '35 to 39.9'
    ],
    correct: 0
  },
  {
    question: 'Which nutrient is most important for muscle repair?',
    options: [
      'Protein',
      'Carbohydrates',
      'Fats',
      'Vitamins'
    ],
    correct: 0
  },
  {
    question: 'How much sleep is recommended for adults per night?',
    options: [
      '7-9 hours',
      '5-6 hours',
      '10-11 hours',
      '4-5 hours'
    ],
    correct: 0
  },
  {
    question: 'What is the impact of smoking on health?',
    options: [
      'Increases the risk of lung disease',
      'Improves lung function',
      'No significant impact',
      'Decreases the risk of heart disease'
    ],
    correct: 0
  },
  {
    question: 'What type of exercise is best for cardiovascular health?',
    options: [
      'Aerobic exercise',
      'Strength training',
      'Flexibility exercises',
      'Balance training'
    ],
    correct: 0
  },
  {
    question: 'What is the primary benefit of regular physical activity?',
    options: [
      'Improves cardiovascular health',
      'Increases stress levels',
      'Decreases bone density',
      'None of the above'
    ],
    correct: 0
  }
];

function Quizzes() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const questionsPerPage = 2;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleAnswerChange = (index, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[index] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const calculatedScore = answers.reduce((total, answer, index) => 
      answer === questions[index].correct ? total + 1 : total
    , 0);
    setScore({
      score: calculatedScore,
      correct: answers.filter((answer, index) => answer === questions[index].correct).length,
      incorrect: answers.filter((answer, index) => answer !== questions[index].correct).length,
      correctQuestions: questions.filter((_, index) => answers[index] === questions[index].correct),
      incorrectQuestions: questions.filter((_, index) => answers[index] !== questions[index].correct)
    });
  };

  const handleRetake = () => {
    setAnswers(Array(questions.length).fill(null));
    setScore(null);
    setCurrentPage(0);
  };

  const currentQuestions = questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);

  return (
    <div className="quizzes">
      <h2>Health and Wellness Quiz</h2>
      <div className="questions">
        {currentQuestions.map((q, qIndex) => (
          <div key={qIndex} className="question">
            <p className="question-text">{`Question ${currentPage * questionsPerPage + qIndex + 1}: ${q.question}`}</p>
            <div className="options">
              {q.options.map((option, oIndex) => (
                <label key={oIndex} className="option">
                  <input
                    type="radio"
                    name={`question-${currentPage * questionsPerPage + qIndex}`}
                    checked={answers[currentPage * questionsPerPage + qIndex] === oIndex}
                    onChange={() => handleAnswerChange(currentPage * questionsPerPage + qIndex, oIndex)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        {currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
        {currentPage < totalPages - 1 
          ? <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
          : <button onClick={handleSubmit}>Submit</button>}
      </div>
      {score && (
        <div className="result">
          <p>Your score: {score.score} / {questions.length}</p>
          <p>Correct answers: {score.correct}</p>
          <p>Incorrect answers: {score.incorrect}</p>
          <div className="questions-breakdown">
            <div className="correct-questions">
              <h3>Correct Questions:</h3>
              <ul>
                {score.correctQuestions.map((q, index) => (
                  <li key={index}>{q.question}</li>
                ))}
              </ul>
            </div>
            <div className="incorrect-questions">
              <h3>Incorrect Questions:</h3>
              <ul>
                {score.incorrectQuestions.map((q, index) => (
                  <li key={index}>{q.question}</li>
                ))}
              </ul>
            </div>
          </div>
          <button onClick={handleRetake} className="retake-button">Retake Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quizzes;
