import React from "react";
import { usePlaylist } from "../../Context/PlaylistContext";
import MoreOptionsModal from "../VideoCard/MoreOptionsModal/MoreOptionsModal";

const WatchLater = () => {
  const {
    playlistsState: { watchLater },
  } = usePlaylist();
  return (
    <>
      <div>
        <div className="playlist-header">
          <h2>Watch Later Playlist</h2>
        </div>
        <videoRow>
          <div className="playlist-container__wrapper">
            {watchLater.map((videos) => {
              const {
                author,
                author_miniImgUrl,
                id,
                thumbnail_imgUrl,
                timestamp,
                title,
                views,
              } = videos;
              return (
                <videoCard className="m-1" key={id}>
                  <div onClick={() => {}} className="thumbnail">
                    <img
                      className="thumbnail__img"
                      src={thumbnail_imgUrl}
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <img src={author_miniImgUrl} alt="" />
                    <div className="card-footer">
                      <h4>{title}</h4>
                      <MoreOptionsModal videos={videos} />
                      <span className="views">{views}</span>
                      <span className="upload-time">{timestamp}</span>
                      <span className="author">{author}</span>
                    </div>
                  </div>
                </videoCard>
              );
            })}
          </div>
        </videoRow>
      </div>
    </>
  );
};

export default WatchLater;
