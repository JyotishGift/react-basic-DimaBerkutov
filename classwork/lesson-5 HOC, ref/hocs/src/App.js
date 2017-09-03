import React, { Component } from 'react';
import $ from 'jquery';

import WidthHOC from './components/HOC/WidthHOC';
import UserApp from './components/UserApp';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <UserApp />
      </div>
    );
  }
}

export default WidthHOC(App);
