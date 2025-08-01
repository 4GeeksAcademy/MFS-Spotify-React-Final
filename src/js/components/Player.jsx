import React from "react";


const Player = ({ playing, togglePlay, nextSong, prevSong, song }) => {
  return (
    <div className="navbar bg-dark">
      <div className="container-fluid d-flex justify-content-center">
        <button onClick={prevSong} className="btn btn-outline-light ">
          <i className="atras!"></i>
        </button>
        <button onClick={togglePlay} className="btn btn-outline-light ">
          <i className="playpausa"></i>
        </button>
        <button onClick={nextSong} className="btn btn-outline-light ">
          <i className="adelante"></i>
        </button>
      </div>
    </div>
  );
};


export default Player;