import './QuestionCount.scss';

function QuestionCount({ counter, total }) {
  return (
    <div className="questionCount">
      Question <span>{counter}</span> of <span>{total}</span>
    </div>
  );
}

export default QuestionCount;
