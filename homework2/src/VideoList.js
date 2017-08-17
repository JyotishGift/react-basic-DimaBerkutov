import React, { Component } from 'react';
import SingleVideo from  './SingleVideo';

class VideoList extends Component{
    render(){
        const { videos, url, updateVideoState} = this.props;
        return (
            <ul className="col-md-4 list-group">
               { 
                    videos.map((elem, index) => {
                        return (                                
                            <li key={index} className="list-group-item">
                                <SingleVideo video = {elem} url = {url} updateVideoState = {updateVideoState}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default VideoList;