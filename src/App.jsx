import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quiz from './components/Quiz';
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
      <Header />
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
      <Footer />
    </div>
  );
}
