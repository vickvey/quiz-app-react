import { useState } from 'react';
import Question from './Question';
import Quiz from './Quiz';
import './App.css';

const QUESTIONS_PATH = './src/assets/qna.json';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function App() {
  const [playQuiz, setPlayQuiz] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    await delay(500);
    try {
      const response = await fetch(QUESTIONS_PATH);
      if (!response.ok) {
        throw new Error('Failded to fetch questions');
      }
      const data = await response.json();
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleStartQuiz = async () => {
    setPlayQuiz(true);
    await fetchQuestions();
  };

  return (
    <div className="app">
      <header>
        <h1>Quiz App</h1>
        <p>A simple timer based quiz app written in ReactJS</p>
      </header>

      <main>
        {!playQuiz ? (
          <div>
            <button onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        ) : !loading ? (
          <Quiz questions={questions} />
        ) : (
          <div>Loading ...</div>
        )}
      </main>
      <footer>
        <span>
          Developed by: <a href="#">Alex Biswas</a>
        </span>
        <span>Copyright 2025</span>
      </footer>
    </div>
  );
}
