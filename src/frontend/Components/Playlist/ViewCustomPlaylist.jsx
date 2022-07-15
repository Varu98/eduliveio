import React from "react";
import { Link, useParams } from "react-router-dom";
import { usePlaylist } from "../../Context/PlaylistContext";
import { removeVideoFromPlaylist } from "../../Services/removeVideoFromPlaylist";
import { useAuth } from "../../Context/AuthContext";
import "./ViewCustomPlaylist.css";

const ViewCustomPlaylist = () => {
  const { playlistID } = useParams();
  const {
    authState: { token },
  } = useAuth();
  const {
    playlistsState: { playlists },
    playlistsDispatch,
  } = usePlaylist();
  return (
    <div>
      <div className="playlist-header">
        <h2>
          {playlists
            .filter((playlist) => playlist._id === playlistID)
            .map((playlist) => playlist.title)}
          Playlist
        </h2>
        <Link style={{ textDecoration: "none" }} to="/playlist">
          <button className="form__btn-submit">Playlists</button>
        </Link>
      </div>
      {playlists.some((playlist) => playlist.videos.length !== 0) ? (
        <videoRow>
          <div className="playlist-container__wrapper">
            {playlists
              .filter((playlist) => playlist._id === playlistID)
              .map((playlist) => {
                const { videos } = playlist;

                console.log(videos);

                return videos.map(
                  ({
                    author,
                    author_miniImgUrl,
                    id,
                    thumbnail_imgUrl,
                    timestamp,
                    title,
                    views,
                  }) => {
                    return (
                      <videoCard className="m-1" key={id}>
                        <div onClick={() => {}} className="thumbnail">
                          <Link to={`/video/${id}`}>
                            <img
                              className="thumbnail__img"
                              src={thumbnail_imgUrl}
                              alt="thumbnail_imgUrl"
                            />
                          </Link>
                        </div>
                        <div className="card-body">
                          <img src={author_miniImgUrl} alt="" />
                          <div className="card-footer">
                            <h4>{title}</h4>
                            <span
                              onClick={() => {
                                removeVideoFromPlaylist(
                                  id,
                                  playlistID,
                                  token,
                                  playlistsDispatch
                                );
                              }}
                            >
                              X
                            </span>
                            <span className="views">{views}</span>
                            <span className="upload-time">{timestamp}</span>
                            <span className="author">{author}</span>
                          </div>
                        </div>
                      </videoCard>
                    );
                  }
                );
              })}
          </div>
        </videoRow>
      ) : (
        <h3>No Videos Added</h3>
      )}
    </div>
  );
};

export default ViewCustomPlaylist;
