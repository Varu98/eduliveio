import React from "react";
import { usePlaylist } from "../../Context/PlaylistContext";
import MoreOptionsModal from "../VideoCard/MoreOptionsModal/MoreOptionsModal";

const History = () => {
  const {
    playlistsState: { history },
    playlistsDispatch,
  } = usePlaylist();
  return (
    <div>
      <div className="playlist-header">
        <h2>My History</h2>
        <button
          onClick={() => {
            playlistsDispatch({ type: "CLEAR_HISTORY" });
          }}
          className="form__btn-submit"
        >
          Clear History
        </button>
      </div>
      <videoRow>
        <div className="playlist-container__wrapper">
          {history.map((videos) => {
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
  );
};

export default History;
