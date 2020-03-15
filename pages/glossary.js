import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Error from './_error';
import fetch from 'isomorphic-unfetch';
import '../static/styles/glossary/index.less';
import Layout from '../common/layout';
import { arrayShuffle, timeFormat } from '../common/utils/util';

const baseInfo = {
  title: 'Glossary quiz questions | Binance Academy',
  description:
    'Think you are a true crypto and blockchain expert? Take the Binance Academy Glossary quiz and prove it. A fun and easy way to grow your crypto-vocabulary.',
  keywords: 'questions, questions'
};
const whitePage = {
  beginner: 1,
  intermediate: 2,
  advanced: 3
};

const Beginner = ({ list }) => {
  const intervalRef = useRef();
  const { title, description, keywords } = baseInfo;
  const router = useRouter();
  const { level } = router.query;
  if (!Object.keys(whitePage).includes(level)) {
    return <Error statusCode="404" />;
  }

  const getRandomQuestions = (
    count,
    { level, needGetAnswer = false, dontMatchId }
  ) => {
    const result = [];
    let allLevelList = list;

    if (level) {
      allLevelList = list.filter(({ difficulty }) => {
        return difficulty && difficulty.level === whitePage[level];
      });
    }

    const len = allLevelList.length - 1;
    const keySet = new Set();
    while (result.length < count) {
      const key = Math.floor(Math.random() * len);
      let condition = `${keySet[key] === undefined}`;
      if (dontMatchId) {
        condition = `${condition} && ${allLevelList[key].id === dontMatchId}`;
      }
      if (condition) {
        let curResult = allLevelList[key];
        if (needGetAnswer) {
          const answers = getAnswers(curResult);
          curResult = Object.assign({}, curResult, answers, { answer: null });
        }
        result.push(curResult);
        keySet[key] = true;
      }
    }
    return result;
  };

  const getAnswers = correctAnswer => {
    const wrongAnswer = getRandomQuestions(3, {
      dontMatchId: correctAnswer.id
    });
    const AllAnswer = [
      {
        id: correctAnswer.id,
        title: correctAnswer.title,
        right: true,
        checked: null
      }
    ];
    let i = 3;
    while (i-- && i >= 0) {
      const { title, id } = wrongAnswer[i];
      AllAnswer.push({
        id,
        title,
        right: false,
        checked: null
      });
    }
    return {
      answers: arrayShuffle(AllAnswer)
    };
  };
  const [questions, setQuestions] = useState([]);
  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(20);
  const [allTime, setAllTime] = useState(0);
  const [right, setRight] = useState(0);
  const [finish, setFinish] = useState(false);
  // const [curLevel, setLevel] = useState(level ? level : '');

  useEffect(() => {
    const randomQuestions = getRandomQuestions(10, {
      level,
      needGetAnswer: true
    });
    setQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    intervalRef.current = timerId;
    if (timer === 0) {
      clearInterval(timerId);
      checkAnswer(progress);
    }
    return () => clearInterval(timerId);
  }, [timer]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const checkAnswer = (number, answerIndex, answer) => {
    if (questions[number].answer === null) {
      clearInterval(intervalRef.current);
      const answerTime = 20 - timer;
      setAllTime(allTime + answerTime);
      let newQuestions = questions.reduce((total, question, index) => {
        const newQuestion = question;
        if (index === number) {
          newQuestion.answers[answerIndex] = Object.assign({}, answer, {
            checked: true
          });
          if (answer && answer.right) {
            setRight(right + 1);
          }
          newQuestion.answer = answerIndex !== undefined ? answer.right : false;
          newQuestion.answerTime = answerTime;
          setTimer(0);
        }
        total.push(newQuestion);
        return total;
      }, []);
      setQuestions(newQuestions);
    }
  };

  const nextQuestion = () => {
    console.log(progress);
    if (progress < 9) {
      setProgress(progress + 1);
      setTimer(20);
    } else {
      setFinish(true);
    }
  };
  const questionTpl = questions.length > 0 && (
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
            ${answer.checked === true && answer.right === false && 'wrong'} 
            ${questions[progress].answer !== null &&
              answer.right === true &&
              'correct'}`}
            type="button"
            key={answer.id}
            onClick={() => checkAnswer(progress, index, answer)}
          >
            {answer.title}
          </button>
        ))}
      </div>
    </>
  );
  const btnTpl =
    timer > 0 ? (
      <div className="operation-btn next-button timer">
        <span className="time">00:{`${timer < 10 ? '0' + timer : timer}`}</span>
      </div>
    ) : (
      <button
        className="operation-btn next-button yellow"
        type="button"
        onClick={nextQuestion}
      >
        Next question
      </button>
    );
  const resultBlockTpl = (
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
  const totalTimeTpl = (
    <div className="timerBlock">
      <div className="title">TOTAL TIME</div>
      <p className="time">
        <span className="font-yellow">{timeFormat(allTime)}</span> / 03:20
      </p>
    </div>
  );

  const termsBlockTpl = (
    <div className="termsBlock right">
      <div className="title">GLOSSARY TERMS FROM YOUR QUIZ</div>
      <div className="terms">
        <div className="termsPart">
          {questions.length > 0 &&
            questions.map((question, index) => (
              <p
                key={`result${question.id}`}
                className={`answer font-${question.answer ? 'green' : 'red'}`}
              >
                {question.slug}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
  const resultTpl = (
    <div className="result-container">
      <div className="left">
        {resultBlockTpl}
        {totalTimeTpl}
      </div>
      {termsBlockTpl}
    </div>
  );
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <main className="main glossary">
        {finish ? (
          <>{resultTpl}</>
        ) : (
          <>
            {questionTpl}
            {btnTpl}
          </>
        )}
      </main>
    </Layout>
  );
};
Beginner.getInitialProps = async ({ req }) => {
  const res = await fetch('http://api.binance.vision/api/glossaries');
  const data = await res.json();
  console.log(`Show data fetched. List: ${data.length}`);
  return {
    list: data
  };
};
export default Beginner;
