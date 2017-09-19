import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = props => (
  <header className="Header">
    <nav>
      <ul className="header-list">
        <li className="header-item">
          <Link to="/">Logo</Link>
        </li>
        <li className="header-item">
          <Link to="/secret">Secret</Link>
        </li>
        <li className="header-item">
          <Link to="/signin">Sign in</Link>
        </li>
        <li className="header-item">
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
