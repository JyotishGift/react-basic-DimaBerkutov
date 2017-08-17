import React, { Component } from 'react';

class SingleVideo extends Component{
  render(){
      const { video, url, updateVideoState } = this.props;
      console.log('video', video)
      console.log('updateVideoState', updateVideoState)
      return (
          <div className="video-list media">
            <div className="video-list media">
              <div className="media-left">                  
                <iframe title="{ title }" src={url + video.id.videoId}></iframe> 
                <img onClick={updateVideoState} className="media-object" src={url + video.id.videoId} alt="video" />   
                  {/* <button onClick={updateVideoState}>Button</button> */}
                  {/* <img className="media-object" src={url + video.id.videoId} alt="video" />  */}
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