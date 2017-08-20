import React, { Component } from 'react';
import SingleVideo from  './SingleVideo';

class VideoList extends Component{    
    render(){
        const { videos, updateVideo} = this.props;
        return (
            <ul className="col-md-4 list-group">
               { 
                    videos.map((elem, index) => {
                        this.index = index;
                        return (                                
                            <li key={index} className="list-group-item">
                                <SingleVideo video = {elem} updateVideo = {updateVideo} index = {this.index}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default VideoList;