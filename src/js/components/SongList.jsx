import React from "react";


const SongList = ({ songs, currentIndex, setCurrentIndex }) => {
  return (
    <div>
      <h2>Playlist</h2>
      <ul className="container">
        {songs.map((song, index) => (
          <li
            key={song.id}
            onClick={() => {
              setCurrentIndex(index);
            }}
            style={{cursor:'pointer'}}
          >
            {song.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;