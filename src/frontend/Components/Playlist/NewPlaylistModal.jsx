import React, { useState, useEffect } from "react";
import { usePlaylist } from "../../Context/PlaylistContext";
import { useAuth } from "../../Context/AuthContext";
import "./NewPlaylistModal.css";
import { addNewPlaylist } from "../../Services/addNewPlaylist";
import { removeVideoFromPlaylist } from "../../Services/removeVideoFromPlaylist";
import { addVideoToPlaylist } from "../../Services/addVideoToPlaylist";

const NewPlaylistModal = ({ video, show, close }) => {
  const { playlistsState, playlistsDispatch } = usePlaylist();
  const {
    authState: { token },
  } = useAuth();
  const { playlists } = playlistsState;

  const [savePlaylist, setSavePlaylist] = useState("");
  const createPlaylistHandler = (e) => {
    const { value } = e.target;
    setSavePlaylist(value);
    // console.log(savePlaylist);
  };

  const videoInPlaylist = (playlist, video) => {
    // console.log(playlist, video);
    return playlist.find((item) => item.id === video.id);
  };

  const closePlaylistModal = () => {
    close();
  };

  const checkBoxHandler = (idExists, playlist, video) => {
    idExists
      ? removeVideoFromPlaylist(
          idExists.id,
          playlist._id,
          token,
          playlistsDispatch
        )
      : addVideoToPlaylist(video, playlist._id, token, playlistsDispatch);
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
                {playlists.length > 0 ? (
                  playlists.map((playlist) => {
                    const idExists = videoInPlaylist(playlist.videos, video);
                    console.log("hello", idExists);
                    return (
                      <li>
                        <label className="flex-row" htmlFor="">
                          <input
                            type="checkbox"
                            checked={idExists?.id === video.id}
                            onChange={() =>
                              checkBoxHandler(idExists, playlist, video)
                            }
                          />
                          {playlist.title}
                        </label>
                      </li>
                    );
                  })
                ) : (
                  <li>No Playlist Created</li>
                )}
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
                addNewPlaylist(token, savePlaylist, video, playlistsDispatch);
                console.log(playlistsState);
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
