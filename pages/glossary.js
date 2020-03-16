import React, { useState, useEffect, useRef } from 'react';
import { server } from '../services';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Error from './_error';
import fetch from 'isomorphic-unfetch';
import '../static/styles/glossary/index.less';
import Layout from '../common/layout';
import { arrayShuffle } from '../common/utils/util';
import TermsBlock from '../modules/glossary/terms-block';
import TotalTime from '../modules/glossary/total-time';
import ResultBlock from '../modules/glossary/result-block';
import QuestionItem from '../modules/glossary/question-item';
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
const getRandomQuestions = (
  allQuestions,
  count,
  { level, needGetAnswer = false, dontMatchId }
) => {
  const result = [];
  let allLevelList = allQuestions.slice();

  if (level) {
    allLevelList = allQuestions.filter(({ difficulty }) => {
      return difficulty && difficulty.level === whitePage[level];
    });
  }

  let len = allLevelList.length;
  const keySet = new Set();
  while (result.length < count) {
    const key = Math.floor(Math.random() * len);
    let condition = `${keySet[key] === undefined}`;
    if (dontMatchId) {
      condition = `${condition} && ${allLevelList[key].id !== dontMatchId}`;
    }
    if (condition) {
      let curResult = allLevelList[key];
      if (needGetAnswer) {
        const answers = getAnswers(allQuestions, curResult);
        curResult = Object.assign({}, curResult, answers, { answer: null });
      }
      result.push(curResult);
      keySet[key] = true;
    }
    [allLevelList[key], allLevelList[len - 1]] = [
      allLevelList[len - 1],
      allLevelList[key]
    ];
    len--;
  }
  return result;
};

const getAnswers = (allQuestions, correctAnswer) => {
  const wrongAnswer = getRandomQuestions(allQuestions, 3, {
    dontMatchId: correctAnswer.id
  });
  const AllAnswer = [
    Object.assign({}, correctAnswer, { right: true, checked: null }),
    ...wrongAnswer
  ];
  return {
    answers: arrayShuffle(AllAnswer)
  };
};

const Beginner = ({ list, questionList, level }) => {
  const [questions, setQuestions] = useState(questionList);
  useEffect(() => {
    console.log(questions);
  }, [questions]);
  useEffect(() => {
    if ((questionList, length === 0)) {
      const randomQuestions = getRandomQuestions(list, 10, {
        level,
        needGetAnswer: true
      });
      setQuestions(randomQuestions);
    }
  }, [level, list, questionList]);
  const [progress, setProgress] = useState(0);

  const [timer, setTimer] = useState(20);
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
  }, [timer, progress]);

  const [allTime, setAllTime] = useState(0);

  const [right, setRight] = useState(0);

  const [finish, setFinish] = useState(false);

  const intervalRef = useRef();
  const { title, description, keywords } = baseInfo;
  const router = useRouter();
  if (!Object.keys(whitePage).includes(router.query.level)) {
    return <Error statusCode="404" />;
  }

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
    if (progress < 9) {
      setProgress(progress + 1);
      setTimer(20);
    } else {
      setFinish(true);
    }
  };
  const resultTpl = (
    <div className="result-container">
      <div className="left">
        <ResultBlock right={right}></ResultBlock>
        <TotalTime allTime={allTime}></TotalTime>
      </div>
      <TermsBlock questions={questions}></TermsBlock>
    </div>
  );
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <main className="main glossary">
        {finish ? (
          <>{resultTpl}</>
        ) : (
          <QuestionItem
            questions={questions}
            progress={progress}
            timer={timer}
            goNextHandle={nextQuestion}
            selectHandle={checkAnswer}
          ></QuestionItem>
        )}
      </main>
    </Layout>
  );
};
Beginner.getInitialProps = async ({ req }) => {
  const res = await fetch(`${server}/api/glossaries`);
  const data = await res.json();
  console.log(`dataLen${data.length}`);
  let level = req ? req.params.level : '';
  let questionList = req
    ? getRandomQuestions(data, 10, {
        level,
        needGetAnswer: true
      })
    : [];
  return {
    list: data,
    questionList,
    level
  };
};
Beginner.propTypes = {
  list: PropTypes.array,
  questionList: PropTypes.array,
  level: PropTypes.string
};
export default Beginner;
