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
              class="thumbnail"
            >
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
    </>
  );
};

export default VideoCard;
