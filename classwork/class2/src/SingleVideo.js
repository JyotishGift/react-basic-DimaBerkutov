import React, { Component } from 'react';

class SingleVideo{
    single(){
        return (
            <li class="list-group-item">
            <div class="video-list media">
              <div class="video-list media">
                <div class="media-left">
                  <img class="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                </div>
              </div>
              <div class="media-body">
                <div class="media-heading">SOME VIDEO</div>
              </div>
            </div>
          </li>
        )
    }
}

export default SingleVideo;