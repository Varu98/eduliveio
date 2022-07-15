import React from "react";
import { Link, useParams } from "react-router-dom";
import VideoCard from "../VideoCard/VideoCard";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import "./SingleVideoPage.css";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { useVideos } from "../../Context/VideoContext";

const SingleVideoPage = () => {
  const { videoID } = useParams();
  const { filterVideos } = useVideos();
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="single-video__interaction-bar">
          <div className="single-video__interaction-bar__content">
            {filterVideos
              .filter((video) => video.id === videoID)
              .map((video) => {
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
            <span className="single-video-icon">
              <AiOutlineLike />
            </span>
            <span className="single-video-icon">
              <AiOutlineDislike />
            </span>
            <span className="single-video-icon">
              <FiShare2 />
            </span>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to="watchlater"
            >
              <div style={{ margin: "auto", display: "inline-flex" }}>
                <span className="single-video-icon">
                  <MdOutlineWatchLater />
                </span>
                <span>Watch Later</span>
              </div>
            </Link>
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
