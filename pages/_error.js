import React from 'react';
import '../static/styles/error/index.less';
import Layout from '../common/layout';
import PropTypes from 'prop-types';
const baseInfo = {
  title: 'An error occured | Binance Academy',
  description:
    'Think you are a true crypto and blockchain expert? Take the Binance Academy Glossary quiz and prove it. A fun and easy way to grow your crypto-vocabulary.',
  keywords: 'error, error'
};

const Error = ({ statusCode }) => {
  const { title, description, keywords } = baseInfo;
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <div className="main error">
        <img
          className="error-img"
          src="/static/images/error/404.svg"
          alt="error"
        ></img>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    </Layout>
  );
};
Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};
Error.propTypes = {
  statusCode: PropTypes.number
};
export default Error;
