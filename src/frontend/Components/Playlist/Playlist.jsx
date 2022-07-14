import React, { useState } from "react";
import { usePlaylist } from "../../Context/PlaylistContext";
import NewPlaylistModal from "./NewPlaylistModal";
import "./Playlist.css";
import PlaylistContainer from "./PlaylistContainer";

const Playlist = () => {
  const [playlistToggle, setPlaylistToggle] = useState(false);
  const {
    playlistsState: { playlists },
  } = usePlaylist();
  return (
    <>
      {playlists.length > 0 ? (
        <div className="playlist-wrapper">
          <div className="playlist-header">
            <h2>My Playlists</h2>
            {playlistToggle ? (
              <NewPlaylistModal
                show={playlistToggle}
                close={() => setPlaylistToggle(false)}
              />
            ) : (
              <button
                onClick={() => setPlaylistToggle(true)}
                className="pd-hr_1 form__btn-submit"
              >
                Create New Playlist
              </button>
            )}
          </div>
          <div className="playlist-container__wrapper">
            {playlists.map((playlist) => {
              return <PlaylistContainer playlist={playlist} />;
            })}
          </div>
        </div>
      ) : (
        <div className="playlist-wrapper">
          <div className="playlist-header">
            <h2>My Playlists</h2>
            {playlistToggle ? (
              <NewPlaylistModal
                show={playlistToggle}
                close={() => setPlaylistToggle(false)}
              />
            ) : (
              <button
                onClick={() => setPlaylistToggle(true)}
                className="pd-hr_1 form__btn-submit"
              >
                Create New Playlist
              </button>
            )}
          </div>
          <h2 style={{ margin: "1rem auto" }}>No Playlist Found</h2>
        </div>
      )}
    </>
  );
};

export default Playlist;
