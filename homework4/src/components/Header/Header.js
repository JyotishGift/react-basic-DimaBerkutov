import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <ul>
            {/* <Link to="/" exact>LOGO</Link> */}
            <a href="#"><img src={logo}/></a>
            <li>
            <Link to="/">Page1</Link>
                {/* <a href="#">SIGN IN</a> */}
            </li>
            <li>
              <Link to="/page2">Page2</Link>
                {/* <a href="#">SIGN UP</a> */}
            </li>
            <li>
                <a href="#">SIGN OUT</a>
            </li>
        </ul>
      </div>
    );
  }
}

export default Header;