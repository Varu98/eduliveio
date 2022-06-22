import React, { useState } from "react";
import "./MoreOptionsModal.css";

import { FiMoreVertical } from "react-icons/fi";
import { usePlaylist } from "../../../Context/PlaylistContext";
const MoreOptionsModal = ({ videos }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { playlistsState, playlistsDispatch } = usePlaylist();

  return (
    <>
      <FiMoreVertical
        onClick={() => setShowOptions((option) => !option)}
        className="option__vertical"
      />
      <div
        onMouseLeave={() => setShowOptions((option) => !option)}
        className={showOptions ? "moreOptions show" : "moreOptions"}
      >
        <ul>
          {playlistsState.watchLater.some((video) => video.id === videos.id) ? (
            <li
              onClick={() => {
                playlistsDispatch({
                  type: "REMOVE_FROM_WATCH_LATER",
                  payload: videos.id,
                });
              }}
            >
              <span className="option__icons-wrapper">
                <img
                  class="option__icons"
                  src="./assets/EduLive_icons/ant-design_field-time-outlined.png"
                  alt=""
                />
              </span>
              <span>Remove from watch later</span>
            </li>
          ) : (
            <li
              onClick={() => {
                playlistsDispatch({
                  type: "SAVE_TO_WATCH_LATER",
                  payload: videos,
                });
              }}
            >
              <span className="option__icons-wrapper">
                <img
                  class="option__icons"
                  src="./assets/EduLive_icons/ant-design_field-time-outlined.png"
                  alt=""
                />
              </span>
              <span>Save to watch later</span>
            </li>
          )}

          <li>
            <span className="option__icons-wrapper">
              <img
                class="option__icons"
                src="./assets/EduLive_icons/ant-design_play-square-outlined.png"
                alt=""
              />
            </span>
            <span>Add to Playlist</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoreOptionsModal;
