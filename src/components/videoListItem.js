import React from 'react';

const VideoListItem = ({video}) =>{//all this says is that the first object in the arguments array has a property video, grab it and set it to a var = videos value.
  //const video = props.video;//remember, when these are created in the videoList, we passed in the video as the property video, so to access it we say props.video// this note was written before this class constructor was refactored to take in {video}
  console.log(video);
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object"/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
};

export default VideoListItem