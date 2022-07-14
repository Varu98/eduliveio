import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { usePlaylist } from "../../Context/PlaylistContext";
import { deletePlaylist } from "../../Services/deletePlaylist";
import "./PlaylistContainer.css";

const PlaylistContainer = ({ playlist }) => {
  const {
    authState: { token },
  } = useAuth();
  const { playlistsDispatch } = usePlaylist();
  console.log(playlist);
  return (
    <>
      {playlist.videos.length !== 0 ? (
        <div className="playlist__container">
          <div className="playlist-container__thumbnail">
            <Link to={`${playlist._id}`}>
              <img
                src={
                  playlist.videos[0].thumbnail_imgUrl
                    ? playlist.videos[0].thumbnail_imgUrl
                    : "https://picsum.photos/300/200"
                }
                alt=""
              />
            </Link>
          </div>
          <span className="playlist__length">{playlist.videos.length}</span>
          <div className="playlist__footer">
            <span className="playlist__name">{playlist.title}</span>
            <span
              onClick={() => {
                deletePlaylist(playlist._id, token, playlistsDispatch);
              }}
            >
              X
            </span>
          </div>
        </div>
      ) : (
        <div className="playlist__container">
          <div className="playlist-container__thumbnail">
            <Link to={`${playlist._id}`}>
              <img src={"https://picsum.photos/300/200"} alt="" />
            </Link>
          </div>
          <span className="playlist__length">{playlist.videos.length}</span>
          <div className="playlist__footer">
            <span className="playlist__name">{playlist.title}</span>
            <span
              onClick={() => {
                deletePlaylist(playlist._id, token, playlistsDispatch);
              }}
            >
              X
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistContainer;
