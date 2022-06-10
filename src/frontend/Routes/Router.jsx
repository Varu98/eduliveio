import React from "react";
import { Routes, Route } from "react-router-dom";
import Trending from "../Components/Trending/Trending";
import History from "../Components/History/History";
import LikedVideos from "../Components/LikedVideos/LikedVideos";
import WatchLater from "../Components/WatchLater/WatchLater";
import Home from "../Home/Home";
import Playlist from "../Components/Playlist/Playlist";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="filter" element={<Trending />} />
      <Route path="history" element={<History />} />
      <Route path="likedVideos" element={<LikedVideos />} />
      <Route path="history" element={<History />} />
      <Route path="watchlater" element={<WatchLater />} />
      <Route path="playlist" element={<Playlist />} />
      {/* <Route />
      <Route />
      <Route />
      <Route />
      <Route /> */}
    </Routes>
  );
};

export default Router;
