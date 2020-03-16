import React from 'react';
import PropTypes from 'prop-types';
let uniqueKey = 0;
const TermsBlock = ({ questions }) => (
  <div className="termsBlock right">
    <div className="title">GLOSSARY TERMS FROM YOUR QUIZ</div>
    <div className="terms">
      <div className="termsPart">
        {questions.length > 0 &&
          questions.map(question => (
            <p
              key={`termsBlock${uniqueKey++}${question.id}`}
              className={`answer font-${question.answer ? 'green' : 'red'}`}
            >
              {question.slug}
            </p>
          ))}
      </div>
    </div>
  </div>
);
TermsBlock.propTypes = {
  questions: PropTypes.array
};
export default TermsBlock;
