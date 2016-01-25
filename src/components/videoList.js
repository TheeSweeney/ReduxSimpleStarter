import React from 'react';
import VideoListItem from './videoListItem';

const videoList = (props) => {
  

  const videoItems = props.videos.map((video) =>{//const is equal to an array of components. map goes through the video list attached to props, and returns an array where each item in the initial array, has now been set as an instance of the VideoListItem class by passing it into the VideoListItem constructor. 
    return <VideoListItem key={video.etag} video={video} />
  });//it's imporant to set unique keys for each list item, to allow for faster updating.

  //react will recognize that the item 3 lines below is an array of components, and render it as such.
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default videoList;