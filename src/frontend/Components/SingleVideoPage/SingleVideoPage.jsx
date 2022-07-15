import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import { AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import "./SingleVideoPage.css";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { useVideos } from "../../Context/VideoContext";
import { addVideoToLikedPlaylist } from "../../Services/addVideoToLikedPlaylist";
import { removeVideoFromLikedPlaylist } from "../../Services/removeVideoFromLikedPlaylist";
import { useAuth } from "../../Context/AuthContext";
import { usePlaylist } from "../../Context/PlaylistContext";

const SingleVideoPage = () => {
  const {
    authState: { token },
  } = useAuth();
  const { videoID } = useParams();
  const { filterVideos } = useVideos();
  const {
    playlistsState: { likes, watchLater },
    playlistsDispatch,
  } = usePlaylist();

  const filterVideoFromID = () =>
    filterVideos.filter((video) => video.id === videoID);
  const filteredVideo = { ...filterVideoFromID()[0] };

  return (
    <div className="single-video-page__wrapper">
      <div className="video-wrapper">
        <div className="video-size__wrapper">
          <div className="single-video__wrapper">
            <iframe
              className="iframe"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="single-video__interaction-bar">
          <div className="single-video__interaction-bar__content">
            {filterVideoFromID().map((video) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: ".5rem",
                  }}
                >
                  <h3>{video.title}</h3>
                  <span>{video.views}</span>
                  <div className="single-video-author">
                    <span>
                      <img
                        style={{ borderRadius: "50%", width: "3rem" }}
                        src={video.author_miniImgUrl}
                        alt="mini-img url"
                      />
                    </span>
                    <span>{video.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="single-video__interaction-bar__icons">
            <span
              onClick={() => {
                console.log(filteredVideo);
                addVideoToLikedPlaylist(
                  filteredVideo,
                  token,
                  playlistsDispatch
                );
              }}
              className="single-video-icon"
            >
              {likes ? (
                likes.length !== 0 ? (
                  <AiFillLike />
                ) : (
                  <AiOutlineLike />
                )
              ) : (
                <AiOutlineLike />
              )}
            </span>
            <span
              onClick={() =>
                removeVideoFromLikedPlaylist(videoID, token, playlistsDispatch)
              }
              className="single-video-icon"
            >
              <AiOutlineDislike />
            </span>
            <span className="single-video-icon">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://www.youtube.com/"
              >
                <FiShare2 />
              </a>
            </span>
            {watchLater.some((video) => video.id === videoID) ? (
              <button
                onClick={() => {
                  playlistsDispatch({
                    type: "REMOVE_FROM_WATCH_LATER",
                    payload: videoID,
                  });
                }}
                className="watch-later__button"
                to="watchlater"
              >
                <div style={{ margin: "auto", display: "inline-flex" }}>
                  <span className="single-video-icon">
                    <MdOutlineWatchLater />
                  </span>
                  <span>Remove From Watch Later</span>
                </div>
              </button>
            ) : (
              <button
                onClick={() => {
                  playlistsDispatch({
                    type: "SAVE_TO_WATCH_LATER",
                    payload: filteredVideo,
                  });
                }}
                className="watch-later__button"
                to="watchlater"
              >
                <div style={{ margin: "auto", display: "inline-flex" }}>
                  <span className="single-video-icon">
                    <MdOutlineWatchLater />
                  </span>
                  <span>Watch Later</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="video-listing-column">
        <div className="video-listing-column__wrapper">
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
