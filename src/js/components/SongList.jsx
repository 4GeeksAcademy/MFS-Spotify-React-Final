import React from "react";


const SongList = ({ songs, currentIndex, setCurrentIndex }) => {
  return (
    <div>
      <h2 className="text-center">Playlist</h2>
      <ul className="list-group">
        {songs.map((song, index) => (
          <li
            key={song.id}
            onClick={() => {
              setCurrentIndex(index);
            }}
            style={{ cursor: 'pointer' }}
          >
            {song.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;