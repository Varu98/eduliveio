import React, { useState } from "react";
import NewPlaylistModal from "./NewPlaylistModal";
import "./Playlist.css";
import PlaylistContainer from "./PlaylistContainer";

const Playlist = () => {
  const [playlistToggle, setPlaylistToggle] = useState(false);
  return (
    <div className="playlist-wrapper">
      <div className="playlist-header">
        <h2>My Playlists</h2>
        {playlistToggle ? (
          <NewPlaylistModal setPlaylistToggle={setPlaylistToggle} />
        ) : (
          <button
            onClick={() => setPlaylistToggle((toggle) => !toggle)}
            className="pd-hr_1 form__btn-submit"
          >
            Create New Playlist
          </button>
        )}
      </div>
      <div className="playlist-container__wrapper">
        <PlaylistContainer />
        <PlaylistContainer />
        <PlaylistContainer />
        <PlaylistContainer />
        <PlaylistContainer />
        <PlaylistContainer />
      </div>
    </div>
  );
};

export default Playlist;
