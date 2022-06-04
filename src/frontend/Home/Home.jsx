import React from "react";
import BannerVideo from "../Components/BannerVideo/BannerVideo";
import CategoryChip from "../Components/CategoryChips/CategoryChip";
import VideoCard from "../Components/VideoCard/VideoCard/VideoCard";
import "./Home.css";
const Home = () => {
  return (
    <div class="grid-wrapper">
      <BannerVideo />
      <CategoryChip />
      <videoRow>
        <VideoCard />
      </videoRow>
    </div>
  );
};

export default Home;
