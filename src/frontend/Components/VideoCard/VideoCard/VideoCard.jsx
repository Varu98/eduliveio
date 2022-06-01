import React from "react";
import "./VideoCard.css";

const VideoCard = () => {
  return (
    <videoCard>
      <div class="thumbnail">
        <img
          src="https://i.ytimg.com/vi/hQ5wo0nRgW8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOWMT8wwszfRDL7ki9c-KA3s2Fg"
          alt=""
          srcset=""
        />
      </div>
      <div class="card-body">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s68-c-k-c0x00ffffff-no-rj"
          alt=""
          srcset=""
        />
        <h3>What are the skills to look in your next hire?</h3>
      </div>
      <div class="card-footer">
        <span class="views">3,582 views</span>
        <span class="upload-time">1 month ago</span>
        <span class="author">Tanay Pratap </span>
      </div>
    </videoCard>
  );
};

export default VideoCard;
