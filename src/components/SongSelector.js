import React from 'react';
import SongDetail from './SongDetail.js';


 class SongSelector extends React.Component{
   render(){
     const options = this.props.songs.map((song, index) => {
       return <SongDetail
         song={song["im:name"].label}
         key={song["im:id"]}
         artist={song["im:artist"].label}
         chartPosition = {index}
         image = {song["im:image"][2].label}
         track = {song.link[1].attributes.href}
       />
     })
     return (
       <div>
         {options}
       </div>
     )
   }
 };

export default SongSelector;
