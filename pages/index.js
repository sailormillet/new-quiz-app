import React from 'react';
import Link from 'next/link';
import '../static/styles/index/index.less';
import Layout from '../common/layout';

const baseInfo = {
  title: 'Glossary quiz difficulty | Binance Academy',
  description:
    'Think you are a true crypto and blockchain expert? Take the Binance Academy Glossary quiz and prove it. A fun and easy way to grow your crypto-vocabulary.',
  keywords: 'hello, hello'
};

const Index = () => {
  const { title, description, keywords } = baseInfo;
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className="glossary">
        <img className="glossary-img" src="/static/images/index/glossary-quiz-logo.svg" alt="Glossary Quiz"></img>
        <div className="glossary-text">
          <h1 className="title">Glossary Quiz</h1>
          <p className="description">Think you know crypto ? Take Academy's crypto glossary quiz.</p>
          <Link href="/difficulty">
            <a className="yellow-btn">Get started</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default Index;