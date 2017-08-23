import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <ul>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            {/* <a href="#"><img src={logo} alt="logo" /></a> */}
            <li>
            <Link to="/signin">SignIn</Link>
                {/* <a href="#">SIGN IN</a> */}
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
                {/* <a href="#">SIGN UP</a> */}
            </li>
            <li>
              <Link to="/signout">SignOut</Link>
                {/* <a href="#">SIGN UP</a> */}
            </li>
        </ul>
      </div>
    );
  }
}

export default Header;