import React from 'react';
import VideoListItem from './video_list_item';

//props is the name assigned to state properties passed from parent components to children
const VideoList =  (props) => {
//  const videos = props.videos;
//in functional compoent props is an argument. in class component props is available via this.props
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      video={video}
      key={video.etag} />
    );
  })
  return (
    <ul className="col-md-4 list-group">
    {videoItems}
    </ul>
  );
}

export default VideoList;
