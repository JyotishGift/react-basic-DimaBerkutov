import React, { Component } from 'react';

class SingleVideo extends Component{
  render(){
      const { video, updateVideo } = this.props;
      return (
          <div className="video-list media">
            <div className="video-list media">
              <div className="media-left">
                <img onClick={updateVideo.bind(this, video)} className="media-object" src={video.snippet.thumbnails.medium.url} alt="video" />
              </div>
            </div>
            <div className="media-body">
              <div className="media-heading">{ video.snippet.title}</div>
            </div>
          </div>
      );
  }
}

export default SingleVideo;