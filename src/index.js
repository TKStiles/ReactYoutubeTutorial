//import React and ReactDOM
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list.js';
import VideoDetail from './Components/video_detail';

// API key
const API_KEY = "AIzaSyBeJE_VTjRAAlCwiJ22c7z-98gsn10NWKY";

// YTSearch({key: API_KEY, term:'dogs'}, function(data){
//   console.log(data);
// });
// Create a new component that produces HTML.
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("dogs");
//YTSearch removed so that code is not repeated. Instead factored into a function that searches based on a term. Default search placed in constructor so that a null search never occurs.
    // YTSearch({key: API_KEY, term:'dog'}, (videos) => {
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });

  }
//Outside of constructor but in app class a video term search function is defined
  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    //throttles the videoSearch function and stores the new videosearch as a constant to be inserted into the callback on SearchBar
    //unthrottled fn <SearchBaronSearchTermChange={term => this.videoSearch(term)}/>
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300);

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo } />
        <VideoList
        onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
      </div>
    );
  }

}
//A callback is place in the searchbar component. When the callback is triggered in the child component this.video.search is kicked off. Call back is passed down into SearchBar class.

// const App = function(){
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }



// Show component's HTML  on the DOM
ReactDOM.render(<App  />, document.querySelector('.container'));
