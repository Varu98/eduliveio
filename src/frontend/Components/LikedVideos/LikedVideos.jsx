import React from "react";
import { Link } from "react-router-dom";
import { usePlaylist } from "../../Context/PlaylistContext";
import MoreOptionsModal from "../VideoCard/MoreOptionsModal/MoreOptionsModal";

const LikedVideos = () => {
  const {
    playlistsState: { likes },
  } = usePlaylist();
  return (
    <div>
      <videoRow>
        <div className="playlist-container__wrapper">
          {likes.map((videos) => {
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
                  <Link to={`/video/${id}`}>
                    <img
                      className="thumbnail__img"
                      src={thumbnail_imgUrl}
                      alt="thumbnail img"
                    />
                  </Link>
                </div>
                <div className="card-body">
                  <img src={author_miniImgUrl} alt="mini img url" />
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
  );
};

export default LikedVideos;
