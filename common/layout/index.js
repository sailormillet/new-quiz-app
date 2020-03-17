import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ title, keywords, description, children, style }) => (
  <div className="app">
    <Head>
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta charset="utf-8" />
      <link rel="dns-prefetch" href="https://api.binance.vision" />
      <link rel="dns-prefetch" href="https://image.binance.vision/" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/images/favicon.ico"
      />
      <link rel="apple-touch-icon" href="/static/images/apple-touch-icon.png" />
      <title>{title || `Glossary quiz`}</title>
      <meta name="keywords" content={keywords || `keywords`} />
      <meta
        name="description"
        content={
          description || `A fun and easy way to grow your crypto-vocabulary.`
        }
      />
      <meta
        property="og:description"
        content={
          description || `A fun and easy way to grow your crypto-vocabulary`
        }
      />
      {/* {process.env.NODE_ENV !== 'production' && (
        <link
          rel="stylesheet"
          type="text/css"
          href={'/_next/static/css/styles.chunk.css?v=' + Date.now()}
        />
      )} */}
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    <Header></Header>
    {children}
    <Footer></Footer>
  </div>
);
Layout.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element
};
export default Layout;
