import React from "react";
import "./NewPlaylistModal.css";

const NewPlaylistModal = ({ setPlaylistToggle }) => {
  return (
    <div className="playlist-modal__backdrop">
      <div className="playlist-modal__wrapper">
        <label htmlFor="name">Name</label>
        <input placeholder="Enter Playlist Name" type="text" />
        <button
          onClick={() => {
            setPlaylistToggle((toggle) => !toggle);
          }}
          className="mt_1 form__btn-login"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default NewPlaylistModal;
