import React, { Component } from 'react';
import './Main.css';
import Router from '../../router';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Router />
      </div>
    );
  }
}

export default Main;