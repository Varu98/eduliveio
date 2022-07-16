import React, { useState } from "react";
import "./MoreOptionsModal.css";

import { FiMoreVertical } from "react-icons/fi";
import { usePlaylist } from "../../../Context/PlaylistContext";
import NewPlaylistModal from "../../Playlist/NewPlaylistModal";
import { useAuth } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const MoreOptionsModal = ({ videos }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { playlistsState, playlistsDispatch } = usePlaylist();
  const navigate = useNavigate();
  const [playlistToggle, setPlaylistToggle] = useState(false);
  const {
    authState: { isLoggedIn },
  } = useAuth();

  return (
    <div className="more-options__wrapper">
      <FiMoreVertical
        onClick={() => setShowOptions((option) => !option)}
        className="option__vertical"
      />
      {showOptions && (
        <div
          onMouseLeave={() => setShowOptions((option) => !option)}
          className={showOptions ? "moreOptions show" : "moreOptions"}
        >
          <ul>
            {playlistsState.watchLater.some(
              (video) => video.id === videos.id
            ) ? (
              <li
                onClick={() => {
                  isLoggedIn
                    ? playlistsDispatch({
                        type: "REMOVE_FROM_WATCH_LATER",
                        payload: videos.id,
                      })
                    : navigate("/login");
                }}
              >
                <span className="option__icons-wrapper">
                  <img
                    className="option__icons"
                    src="./assets/EduLive_icons/ant-design_field-time-outlined.png"
                    alt=""
                  />
                </span>
                <span>Remove from watch later</span>
              </li>
            ) : (
              <li
                onClick={() => {
                  isLoggedIn
                    ? playlistsDispatch({
                        type: "SAVE_TO_WATCH_LATER",
                        payload: videos,
                      })
                    : navigate("/login");
                }}
              >
                <span className="option__icons-wrapper">
                  <img
                    className="option__icons"
                    src="./assets/EduLive_icons/ant-design_field-time-outlined.png"
                    alt=""
                  />
                </span>
                <span>Save to watch later</span>
              </li>
            )}

            <li
              onClick={() => {
                isLoggedIn
                  ? setPlaylistToggle((toggle) => !toggle)
                  : navigate("login");
              }}
            >
              <span className="option__icons-wrapper">
                <img
                  className="option__icons"
                  src="./assets/EduLive_icons/ant-design_play-square-outlined.png"
                  alt=""
                />
              </span>
              <span>Add to Playlist</span>
            </li>
          </ul>
        </div>
      )}
      <NewPlaylistModal
        show={playlistToggle}
        close={() => setPlaylistToggle(!playlistToggle)}
        video={videos}
      />
    </div>
  );
};

export default MoreOptionsModal;
