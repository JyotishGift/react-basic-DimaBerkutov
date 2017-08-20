import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-spinner/react-spinner.css'
import Search from  './Search';
import Video from  './Video';
import VideoList from  './VideoList';

const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
  constructor(){
    super();
    this.url = 'https://www.youtube.com/embed/';
    this.videoSearch = 'matrix';
    this.state = {
      videos: [],
      id: null,
      title: null,
      description: null
    };
    this.searchChange = this.searchChange.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }
  componentWillMount(){
    YTSearch({ key: API_KEY, term: this.videoSearch }, data => {
      if(!data) return (<div>Loading...</div>)
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
  updateVideo(video){
    return this.setState(prevState => {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description
      };
    });
  }
  searchChange(){
    this.videoSearch = document.querySelector('.search-bar').querySelector('input').value;    
    this.componentWillMount();
  }
  render() {
    return (
      <main className="container">
        <Search searchChange = {this.searchChange}/>
        <div className="row">
          <Video>
              <div className="embed-responsive embed-responsive-16by9">
                  <iframe title={ this.state.title } src={this.url + this.state.id}></iframe>
              </div>
              <div className="details">
                <div>{ this.state.title }</div>
                <div>{this.state.description}</div>
              </div>
          </Video>
          {/* <Video id = {
            this.state.id} 
            title = {this.state.title} 
            description = {this.state.description} 
            url = {this.url} 
          />  */}
          <VideoList videos = {this.state.videos} updateVideo = {this.updateVideo}/>
        </div>
        {/* <Spinner /> */}
      </main>
    );
  }
}

export default App;
