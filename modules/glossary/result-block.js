import React from 'react';
import PropTypes from 'prop-types';

const ResultBlock = ({ right, reDoHandle }) => (
  <div className="resultBlock">
    <div className="title">YOUR GLOSSARY QUIZ RESULTS</div>
    <div className="rate">
      <div className="rate-content">
        <span className="number">{right}/10</span>
        <span className="tips">ANSWERED CORRECTLY</span>
      </div>
    </div>
    <button className="operation-btn redo-btn yellow ">Share</button>
    <button className="operation-btn redo-btn" onClick={reDoHandle}>
      Retake Quiz
    </button>
  </div>
);

ResultBlock.propTypes = {
  right: PropTypes.number,
  reDoHandle: PropTypes.func
};
export default ResultBlock;
