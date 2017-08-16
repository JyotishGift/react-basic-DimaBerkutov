import React, { Component } from 'react';
import SingleVideo from  './SingleVideo';

class VideoList extends Component{
    render(){
        const { videos , url} = this.props;
        
        return (
            <ul className="col-md-4 list-group">
               { 
                    videos.forEach(elem => {
                        <SingleVideo video = {elem} url = {url}/>
                    })
                }
            </ul>
        )
    }
}

export default VideoList;