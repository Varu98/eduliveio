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
import { MockMan } from "../Components/Mockman/Mockman";
import ViewCustomPlaylist from "../Components/Playlist/ViewCustomPlaylist";
import SingleVideoPage from "../Components/SingleVideoPage/SingleVideoPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="filter" element={<Trending />} />
      <Route path="video/:videoID" element={<SingleVideoPage />} />
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
      <Route
        path="/playlist/:playlistID"
        element={
          <RequiresAuth>
            <ViewCustomPlaylist />
          </RequiresAuth>
        }
      />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="mockman" element={<MockMan />} />
    </Routes>
  );
};

export default Router;
