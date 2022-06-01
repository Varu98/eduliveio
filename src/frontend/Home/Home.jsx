import React from "react";
import BannerVideo from "../Components/BannerVideo/BannerVideo";
import Navbar from "../Components/Navbar/Navbar";
import SideBar from "../Components/VideoCard/VideoCard/SideBar/SideBar";
import VideoCard from "../Components/VideoCard/VideoCard/VideoCard";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div class="grid-wrapper">
        <SideBar />
        <BannerVideo />
        <videoRow>
          <VideoCard />
        </videoRow>
      </div>
    </div>
  );
};

export default Home;
