import React, { Component } from 'react';


class Video extends Component {
    constructor(){
        super();
      console.log('url videof dsafdsfadsfadsf')
    }
    render(){
        const { url, video } = this.param;
      console.log('url video', url, video)
        return (
            <iframe title="random" src={url + video.id.videoId}></iframe>
        );
    }
}
export default Video;