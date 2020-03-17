import React from 'react';
import PropTypes from 'prop-types';
let uniqueKey = 0;
const QuestionItem = ({
  questions,
  progress,
  timer,
  goNextHandle,
  selectHandle
}) => {
  const tpl = questions.length > 0 && (
    <>
      <div className="progress">
        <span className="count">{progress + 1}/10</span>
        <p className="bar" style={{ width: `${progress}0%` }}></p>
      </div>
      <p className="glossary-title">{questions[progress].excerpt}</p>
      <div className="answers">
        {questions[progress].answers.map((answer, index) => (
          <button
            className={`operation-btn quiz-answer 
                ${answer.checked === true && !answer.right && 'wrong'} 
                ${questions[progress].answer !== null &&
                  answer.right === true &&
                  'correct'}`}
            type="button"
            key={`answer${uniqueKey++}${answer.id}`}
            onClick={() => selectHandle(progress, index, answer)}
          >
            {answer.title}
          </button>
        ))}
      </div>
      {timer > 0 ? (
        <div className="operation-btn next-button timer">
          <span
            className={`time 
                ${timer <= 5 && 'font-red'} `}
          >
            00:{`${timer < 10 ? '0' + timer : timer}`}
          </span>
        </div>
      ) : (
        <button
          className="operation-btn next-button yellow"
          type="button"
          onClick={goNextHandle}
        >
          Next question
        </button>
      )}
    </>
  );
  return tpl;
};
QuestionItem.propTypes = {
  questions: PropTypes.array,
  progress: PropTypes.number,
  timer: PropTypes.number,
  goNextHandle: PropTypes.func,
  selectHandle: PropTypes.func
};
export default QuestionItem;
