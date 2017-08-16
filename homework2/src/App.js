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
    this.state = {
      url: 'https://www.youtube.com/embed/',
      videos: [],
      id: null,
      videoDetail: null
    };
    YTSearch({ key: API_KEY, term: 'matrix' }, data => {
        console.log(data);
        this.state.videos = data;
        // this.updateSideoState();
        console.log('Video', this.state.url, this.state.videos[0]);
        this.updateSideoState();
    });
  }
  updateSideoState(){
        // <Video url = {this.state.url} video = {this.state.videos[0]}/>
    return this.setState(prevState => {
      return {id: this.state.videos[0].id.videoId};
    });
  }
  render() {
      console.log('this.state.videos.id', this.state.videos.id)
    return (
      <main className="container">
        <Search />

        <div className="row">
          <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe title="random" src={this.state.url + this.state.id}></iframe>
            </div>

            <div className="details">
              <div>TITLE</div>
              <div>DESCRIPTION</div>
            </div>
          </div>
          <VideoList videos = {this.state.videos} url = {this.state.url}/>
        </div>
      </main>
    );
  }
}

export default App;
