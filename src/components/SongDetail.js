import React from 'react';


const SongDetail = function (props) {
  // if(!props.selectedSong) return null;
  return (
    <div className="results-box">
      <p><b>No.{props.chartPosition +1}</b>
      </p>
      <img src={props.image}/>
      <p>{props.song["im:name"]}</p>
      <p>{props.artist}</p>
      {/* <p> {props.artist} </p> */}
      <audio id="myAudio" controls src={props.track} type="audio/ogg"></audio>
      <br></br>
    </div>
  )
}


export default SongDetail;
