import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DishActive from './BookActive';
import DishesList from './DishesList';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <DishActive />
        <DishesList />
      </div>
    );
  }
}

export default App;
