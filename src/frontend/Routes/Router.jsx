import React from "react";
import { Routes, Route } from "react-router-dom";
import Trending from "../Components/Trending/Trending";
import History from "../Components/History/History";
import LikedVideos from "../Components/LikedVideos/LikedVideos";
import WatchLater from "../Components/WatchLater/WatchLater";
import Home from "../Home/Home";
import Playlist from "../Components/Playlist/Playlist";
import SignupPage from "../Auth/SignupPage";
import LoginPage from "../Auth/LoginPage";
import { RequiresAuth } from "../Auth/RequiresAuth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="filter" element={<Trending />} />
      <Route
        path="history"
        element={
          <RequiresAuth>
            <History />
          </RequiresAuth>
        }
      />
      <Route
        path="likedVideos"
        element={
          <RequiresAuth>
            <LikedVideos />
          </RequiresAuth>
        }
      />
      <Route
        path="watchlater"
        element={
          <RequiresAuth>
            <WatchLater />
          </RequiresAuth>
        }
      />
      <Route
        path="playlist"
        element={
          <RequiresAuth>
            <Playlist />
          </RequiresAuth>
        }
      />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
