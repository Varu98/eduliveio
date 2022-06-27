import React, { useState } from "react";
import { usePlaylist } from "../../Context/PlaylistContext";
import "./NewPlaylistModal.css";

const NewPlaylistModal = ({ video, show, close }) => {
  const { playlistsState, playlistsDispatch } = usePlaylist();
  const { playlists } = playlistsState;

  const [savePlaylist, setSavePlaylist] = useState("");
  const createPlaylistHandler = (e) => {
    const { value } = e.target;
    setSavePlaylist(value);
    console.log(savePlaylist);
  };

  const dispatchPlaylist = () => {
    playlistsDispatch({
      type: "ADD_PLAYLIST",
      payload: { name: savePlaylist, videoToAdd: video },
    });
  };

  const closePlaylistModal = () => {
    close();
  };
  return (
    <>
      {show && (
        <div className="playlist-modal__backdrop">
          <div className="playlist-modal__wrapper">
            <div className="playlist-modal__header">
              <button
                className="close-playlist-modal"
                onClick={closePlaylistModal}
              >
                X
              </button>
              <h3>Create New Playlist</h3>
            </div>
            <div className="playlist-modal__playlists">
              <ul className="flex-col">
                {playlists.map((playlist) => (
                  <li>
                    <label className="flex-row" htmlFor="">
                      <input type="checkbox" name="" id="" />
                      {playlist.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <label className="flex-col" htmlFor="">
              <span>Name</span>
              <input
                onChange={(e) => {
                  createPlaylistHandler(e);
                }}
                placeholder="Enter Playlist Name"
                type="text"
              />
            </label>
            <button
              onClick={() => {
                dispatchPlaylist();
                close();
              }}
              className="mt_1 form__btn-login"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPlaylistModal;
