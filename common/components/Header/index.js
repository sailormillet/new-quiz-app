import React from 'react';
import Link from 'next/link';
import './index.less';

const Header = () => (
  <nav className="menu">
    <Link href="/">
      <a className="yellow">BINANCE</a>
    </Link>
  </nav>
);
export default Header;
