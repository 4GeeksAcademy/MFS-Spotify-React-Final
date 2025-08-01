import React from "react";


const Player = ({ playing, togglePlay, nextSong, prevSong }) => {
  return (
    <div className="navbar bg-dark fixed-player">
      <div className="container-fluid d-flex justify-content-center">
        <button onClick={prevSong} className="btn btn-outline-light">
          <i className="fa-solid fa-backward"></i>
        </button>
        <button onClick={togglePlay} className="btn btn-outline-light">
          <i className={'fa-solid&{ playing === "play" ? "fa-play" : "fa-pause"}'}></i>
        </button>
        <button onClick={nextSong} className="btn btn-outline-light ">
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>
    </div>
  );
};


export default Player;