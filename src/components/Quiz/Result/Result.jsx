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
      <h3>You are {resultObject.type}</h3>
      <img src={resultObject.picture} alt={resultObject.type} />
      {resultObject.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Result;
