import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import logo from './logo.svg';
import './App.css';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

// videoId - https://www.youtube.com/embed/:videoId
// 

class App extends Component {
  constructor() {
    super();

    YTSearch({ key: API_KEY, term: 'flatearth' }, data => {
      console.log(data);
    });
  }
  render() {
    const url = `https://www.youtube.com/embed/7GSgWzmR_-c`;
    return (
      <div className="App">
        <iframe src={url} />
        <img src='https://i.ytimg.com/vi/7GSgWzmR_-c/default.jpg' />
      </div>
    );
  }
}

export default App;
