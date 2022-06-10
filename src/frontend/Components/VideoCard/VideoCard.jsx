import React from "react";
import { useVideos } from "../../Context/VideoContext";
import "./VideoCard.css";

const VideoCard = () => {
  const { filterVideos } = useVideos();

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
            <div class="thumbnail">
              <img class="thumbnail__img" src={thumbnail_imgUrl} alt="" />
            </div>
            <div class="card-body">
              <img src={author_miniImgUrl} alt="" />
              <div class="card-footer">
                <h4>{title}</h4>
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
