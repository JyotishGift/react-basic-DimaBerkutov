import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import logo from './logo.svg';
import './App.css';
import Search from  './Search';
import Video from  './Video';
import VideoList from  './VideoList';
// import '../bootstrap/dist/css/bootstrap.min.css';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
  constructor(){
    super();
     this.url = 'https://www.youtube.com/embed/';
      this.state = {
        videos: [],
        id: null,
        title: null,
        description: null
      };
      this.videoState = this.videoState;
      YTSearch({ key: API_KEY, term: 'matrix' }, data => {
          this.updateVideoState(data);
      });
  }
  updateVideoState(data){
    return this.setState(prevState => {
      return {
        videos: data,
        id: data[0].id.videoId,
        title: data[0].snippet.title,
        description: data[0].snippet.description
      };
    });
  }
  render() {
    return (
      <main className="container">
        <Search />
        <div className="row">
          <Video id = {
            this.state.id} 
            title = {this.state.title} 
            description = {this.state.description} 
            url = {this.url} 
          /> 
          <VideoList videos = {this.state.videos} url = {this.url} updateVideoState = {this.updateVideoState}/>
        </div>
      </main>
    );
  }
}

export default App;
