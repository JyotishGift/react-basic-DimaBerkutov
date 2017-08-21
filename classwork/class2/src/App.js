import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from  'Search';
import VideoList from  'VideoList';


class App extends Component {
  render() {
    return (
      <main class="container">
        <Search />

        <div class="row">
          <div class="video-detail col-md-8">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe title="random" src="https://www.youtube.com/embed/-Qwxw11-"></iframe>
            </div>

            <div class="details">
              <div>TITLE</div>
              <div>DESCRIPTION</div>
            </div>
          </div>
          <VideoList />
        </div>
      </main>
    );
  }
}

export default App;
