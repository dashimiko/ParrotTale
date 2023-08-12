import { QUIZ_RESULTS } from '../../../utils/constants';
import './Result.scss';

function Result({ quizResult }) {
  const resultObject = QUIZ_RESULTS.find(
    (result) => result.type === quizResult
  );

  console.log(quizResult);
  console.log(resultObject);

  return (
    <div className="result">
      <h3 className="result__title">You are {resultObject.type} 💛</h3>
      <img
        className="result__picture"
        src={resultObject.picture}
        alt={resultObject.type}
      />
      <div className="article-template__text">
        {resultObject.content.map((paragraph) => (
          <p className="result__text" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Result;
