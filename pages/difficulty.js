import React from 'react';
import Link from 'next/link';
import '../static/styles/difficulty/index.less';
import Layout from '../common/layout';
const baseInfo = {
  title: 'Glossary quiz difficulty | Binance Academy',
  description:
    'Think you are a true crypto and blockchain expert? Take the Binance Academy Glossary quiz and prove it. A fun and easy way to grow your crypto-vocabulary.',
  keywords: 'difficulty, difficulty'
};

const Difficulty = () => {
  const { title, description, keywords } = baseInfo;
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <>
      <main className="difficulty main">
          <h1 className="title">Glossary Quiz</h1>
          <p className="description">Select a suitable level of difficulty.</p>
          <div className="rating">
              <Link as={`/glossary/beginner`} href={`/glossary?title=beginner`} >
              {/* <Link href="/beginner"> */}
                <a className="rating-item">
                  <p className="rating-icons">
                    <i className="icon-level"></i>
                  </p>
                  <h3>Beginner</h3>
                  <p className="rating-description">
                    I am a complete beginner and just started exploring Binance Academy. Let me test my basic knowledge.
                  </p>
                </a>
              </Link>
              <Link as={`/glossary/intermediate`} href={`/glossary?title=intermediate`} >
              {/* <Link href="/intermediate"> */}
                <a className="rating-item">
                  <p className="rating-icons">
                    <i className="icon-level"></i>
                    <i className="icon-level"></i>
                  </p>
                  <h3>intermediate</h3>
                  <p className="rating-description">
                    I am a frequent visitor of Binance Academy and am quite familiar with some terms, but still on my path to true knowledge.
                  </p>
                </a>
              </Link>
              <Link as={`/glossary/advanced`} href={`/glossary?title=advanced`} >
              {/* <Link href="/advanced"> */}
                <a className="rating-item">
                  <p className="rating-icons">
                    <i className="icon-level"></i>
                    <i className="icon-level"></i>
                    <i className="icon-level"></i>
                  </p>
                  <h3>advanced</h3>
                  <p className="rating-description">
                  I have learned enough at Binance Academy. My knowledge base is wide and I feel ready to be challenged.
                  </p>
                  </a>
              </Link>
          </div>
      </main>
      </>
    </Layout>
  );
};
export default Difficulty;
