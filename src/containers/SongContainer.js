import React, {Component} from 'react';
import SongSelector from '../components/SongSelector.js';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((songs) => {
      this.setState({
        songs: songs.feed.entry
      });
    })
  }

  handleSongSelected(index) {
    console.log(index);
    const selectedSong = this.state.songs[index];
    console.log(this.state.songs[1]);
    console.log(selectedSong);
    this.setState({
      selectedSong: selectedSong
    });
  }

render() {
  return (
    <div className="song-container">
      {/* <h2>TOP 20 (UK) </h2> */}
      <SongSelector songs={this.state.songs}/>
      {/* //   onSongSelected = {this.handleSongSelected} /> */}
      {/* <ArtistDetail selectedSong={this.state.selectedSong}/> */}
    </div>
  )
}

};


export default SongContainer;
