import './AnswerOption.scss';

function AnswerOption({ answerType, answer, answerContent, onAnswerSelected }) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={answerType === answer}
        id={answerType}
        value={answerType}
        disabled={answer}
        onChange={onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={answerType}>
        {answerContent}
      </label>
    </li>
  );
}

export default AnswerOption;
