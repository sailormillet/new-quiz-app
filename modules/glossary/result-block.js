import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ResultBlock = ({ right }) => (
  <div className="resultBlock">
    <div className="title">YOUR GLOSSARY QUIZ RESULTS</div>
    <div className="rate">
      <div className="rate-content">
        <span className="number">{right}/10</span>
        <span className="tips">ANSWERED CORRECTLY</span>
      </div>
    </div>
    <button className="operation-btn redo-btn yellow ">Share</button>
    <Link as={`/glossary/beginner`} href={`/glossary?level=beginner`}>
      <a className="operation-btn redo-btn ">Retake Quiz</a>
    </Link>
  </div>
);

ResultBlock.propTypes = {
  right: PropTypes.number
};
export default ResultBlock;
