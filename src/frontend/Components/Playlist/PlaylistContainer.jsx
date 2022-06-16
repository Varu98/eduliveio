import React from "react";
import "./PlaylistContainer.css";

const PlaylistContainer = () => {
  return (
    <div className="playlist__container">
      <div className="playlist-container__thumbnail">
        <img src="https://picsum.photos/300/200" alt="" />
      </div>
      <span className="playlist__length">1</span>
      <div className="playlist__footer">
        <span className="playlist__name">Varu's custom Playlist</span>
        <span>X</span>
      </div>
    </div>
  );
};

export default PlaylistContainer;
