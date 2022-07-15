import React from "react";
import { useVideos } from "../../Context/VideoContext";
import "./VideoCard.css";
import MoreOptionsModal from "./MoreOptionsModal/MoreOptionsModal";
import { usePlaylist } from "../../Context/PlaylistContext";
const VideoCard = () => {
  const { filterVideos } = useVideos();
  const { playlistsDispatch } = usePlaylist();

  return (
    <>
      {filterVideos.map((videos) => {
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
          <videoCard key={id}>
            <div
              onClick={() => {
                playlistsDispatch({ type: "ADD_TO_HISTORY", payload: videos });
              }}
              className="thumbnail"
            >
              <img className="thumbnail__img" src={thumbnail_imgUrl} alt="" />
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
    </>
  );
};

export default VideoCard;
