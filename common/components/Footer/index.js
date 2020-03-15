import React from 'react';
import Link from 'next/link';
import './index.less';

const Footer = () => (
  <footer className="footer">
    <Link href="/">
      <a className="yellow">BINANCE</a>
    </Link>
    <div className="link-lists"></div>
    <p className="copyright">Binance.com © 2017-2020. All rights reserved.</p>
  </footer>
);
export default Footer;
