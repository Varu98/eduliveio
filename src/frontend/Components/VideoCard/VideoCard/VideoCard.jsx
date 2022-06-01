import React from "react";
import { useVideos } from "../../../Context/VideoContext";
import "./VideoCard.css";

const VideoCard = () => {
  const { videoData } = useVideos();

  console.log(videoData);
  return (
    <>
      {videoData.map((videos) => {
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
              <img src={thumbnail_imgUrl} alt="" />
            </div>
            <div class="card-body">
              <img src={author_miniImgUrl} alt="" />
              <h3>{title}</h3>
            </div>
            <div class="card-footer">
              <span class="views">{views}</span>
              <span class="upload-time">{timestamp}</span>
              <span class="author">{author}</span>
            </div>
          </videoCard>
        );
      })}
    </>
  );
};

export default VideoCard;
