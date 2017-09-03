import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookActive from './BookActive';
import BookList from './BookList';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <BookActive />
        <BookList />
      </div>
    );
  }
}

export default App;
