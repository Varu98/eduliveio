import React from "react";
import "./PlaylistContainer.css";

const PlaylistContainer = ({ playlist }) => {
  return (
    <div className="playlist__container">
      <div className="playlist-container__thumbnail">
        <img src={playlist.videoToAdd[0].thumbnail_imgUrl} alt="" />
      </div>
      <span className="playlist__length">{playlist.videoToAdd.length}</span>
      <div className="playlist__footer">
        <span className="playlist__name">{playlist.name}</span>
        <span>X</span>
      </div>
    </div>
  );
};

export default PlaylistContainer;
