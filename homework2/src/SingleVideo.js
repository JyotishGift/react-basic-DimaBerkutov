import React, { Component } from 'react';

class SingleVideo extends Component{
    render(){
        const { video, url } = this.props;
        console.log('video', video)
        return (
            <li className="list-group-item">
            <div className="video-list media">
              <div className="video-list media">
                <div className="media-left">
                  <img className="media-object" src={url + video.id.videoId} alt="video" />
                </div>
              </div>
              <div className="media-body">
                <div className="media-heading">SOME VIDEO</div>
              </div>
            </div>
          </li>
        )
    }
}

export default SingleVideo;