import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


// 1. Header - добавляем Link -> react-router-dom
// 2. Main/router.js - добавляем ? Route +path + Signin Signup
// 3. 
const Header = () => {
  return (
    <header className="Header">
      <ul>
        <Link to="/">LOGO</Link>
        <li>
          <Link to="/signin">SIGN IN</Link>
        </li>
        <li>
          <Link to="/signup">SIGN UP</Link>
        </li>
        <li>
          <Link to="/signout">SIGN OUT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
