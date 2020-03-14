import React from 'react';
import '../static/styles/index/index.less';
import Layout from '../common/layout';
import fetch from 'isomorphic-unfetch'

const baseInfo = {
  title: 'Glossary quiz questions | Binance Academy',
  description:
    'Think you are a true crypto and blockchain expert? Take the Binance Academy Glossary quiz and prove it. A fun and easy way to grow your crypto-vocabulary.',
  keywords: 'questions, questions'
};

const Beginner = () => {
  const { title, description, keywords } = baseInfo;
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className="questions">
        <p className="progress"></p>
        <p className="questions-title"></p>
        <div className="">
            <p className="questions-title"></p>
        </div>
      </div>
    </Layout>
  );
};
Beginner.getInitialProps = async ({ req }) => {
    const res = await fetch('http://api.binance.vision/api/glossaries');
    const data = await res.json();
    console.log(`Show data fetched. List: ${data.length}`)
    return {
        List: data
    }
  }
export default Beginner;