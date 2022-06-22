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
                  <div onClick={() => {}} class="thumbnail">
                    <img class="thumbnail__img" src={thumbnail_imgUrl} alt="" />
                  </div>
                  <div class="card-body">
                    <img src={author_miniImgUrl} alt="" />
                    <div class="card-footer">
                      <h4>{title}</h4>
                      <MoreOptionsModal videos={videos} />
                      <span class="views">{views}</span>
                      <span class="upload-time">{timestamp}</span>
                      <span class="author">{author}</span>
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
