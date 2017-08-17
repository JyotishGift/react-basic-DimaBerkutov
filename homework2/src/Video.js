import React, { Component } from 'react';


class Video extends Component {
    render(){
        const { id, title, description, url, } = this.props;
        return (
          <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={ title } src={url + id}></iframe>
            </div>
            <div className="details">
              <div>{ title }</div>
              <div>{ description }</div>
            </div>
          </div>
        );
    }
}
export default Video;