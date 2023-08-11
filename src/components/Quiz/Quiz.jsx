/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-bind */
import { useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import Question from './Question/Question';
import QuestionCount from './QuestionCount/QuestionCount';
import AnswerOption from './AnswerOption/AnswerOption';
import Result from './Result/Result';
import { QUIZ_QUESTIONS } from '../../utils/constants';
import './Quiz.scss';

function Quiz() {
  const [counter, setCounter] = useState(0);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answersCount, setAnswersCount] = useState({});
  const [result, setResult] = useState('');

  const addedConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
  }

  function getResults() {
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  function setResults(reslt) {
    if (reslt.length === 1) {
      setResult(reslt[0]);
    } else {
      setResult('Budgerigar');
    }
  }

  function setNextQuestion() {
    const newCounter = counter + 1;
    const newQuestionId = questionId + 1;

    setCounter(newCounter);
    setQuestionId(newQuestionId);
    setQuestion(QUIZ_QUESTIONS[newCounter].question);
    setAnswerOptions(QUIZ_QUESTIONS[newCounter].answers);
    setAnswer('');
  }

  function setUserAnswer(answr) {
    setAnswersCount((prevAnswersCount) => ({
      ...prevAnswersCount,
      [answr]: (prevAnswersCount[answr] || 0) + 1,
    }));
    setAnswer(answr);
  }

  useEffect(() => {
    const shuffledAnswerOptions = QUIZ_QUESTIONS.map((i) =>
      shuffleArray(i.answers)
    );

    setQuestion(QUIZ_QUESTIONS[0].question);
    setAnswerOptions(shuffledAnswerOptions[0]);
  }, []);

  function handleAnswerSelected(event) {
    setUserAnswer(event.currentTarget.value);
    if (counter === 4) {
      addedConfetti();
    }
    if (questionId < QUIZ_QUESTIONS.length) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  }

  function renderQuiz() {
    return (
      <div key={questionId}>
        <QuestionCount counter={questionId} total={QUIZ_QUESTIONS.length} />
        <Question content={question} />
        <ul className="answerOptions">
          {answerOptions.map((answerOption) => (
            <AnswerOption
              key={answerOption.content}
              answerContent={answerOption.content}
              answerType={answerOption.type}
              answer={answer}
              questionId={questionId}
              onAnswerSelected={handleAnswerSelected}
            />
          ))}
        </ul>
      </div>
    );
  }

  function renderResult() {
    return <Result quizResult={result} />;
  }

  return (
    <div className="quiz">
      <div className="quiz__box">
        <h2 className="quiz__title">What kind of parrot are you? Quiz</h2>
      </div>
      {result ? renderResult() : renderQuiz()}
    </div>
  );
}

export default Quiz;
