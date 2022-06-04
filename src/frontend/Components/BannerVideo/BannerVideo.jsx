import React from "react";
import { useVideos } from "../../Context/VideoContext";
import "./BannerVideo.css";
const BannerVideo = () => {
  const { videoData } = useVideos();

  return (
    <bannerImg>
      {videoData
        .filter(
          (e) =>
            e.thumbnail_imgUrl ===
            "https://i.ytimg.com/vi/hQ5wo0nRgW8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOWMT8wwszfRDL7ki9c-KA3s2Fg"
        )
        .map((e) => (
          <>
            <div className="banner__text-wrapper">
              <h1>{e.title}</h1>
              <h3>{e.author}</h3>
              <div className="banner__btns">
                <button class="btns btn-logout">Watch Later</button>
                <button class="btns btn-login">Play</button>
              </div>
            </div>
            <div className="banner__img-wrapper">
              <img className="banner__img" src={e.thumbnail_imgUrl} alt="" />
            </div>
          </>
        ))}
    </bannerImg>
  );
};

export default BannerVideo;
