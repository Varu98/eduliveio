import React from "react";
import { Link } from "react-router-dom";
import { useVideos } from "../../Context/VideoContext";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./SideBar.css";
import { useState } from "react";

const SideBar = () => {
  const { filterDispatch } = useVideos();
  const [sideBarToggle, setSideBarToggle] = useState(false);
  return (
    <sideBar className={sideBarToggle ? "show__sidebar" : "hide__sidebar"}>
      <div className="sidebar__toggle">
        {sideBarToggle ? (
          <BsFillArrowLeftCircleFill
            onClick={() => setSideBarToggle(!sideBarToggle)}
          />
        ) : (
          <BsFillArrowRightCircleFill
            onClick={() => setSideBarToggle(!sideBarToggle)}
          />
        )}
      </div>
      <div style={{ FontFace: "Montserrat" }} className="sidebar__wrapper">
        <Link
          onClick={() => {
            filterDispatch({ type: "HOME" });
          }}
          to="/"
        >
          <span>
            <img
              className="sidebar__icons"
              src="./assets/EduLive_icons/Variant8.png"
              alt=""
            />
          </span>
          Home
        </Link>
        <Link
          onClick={() => {
            filterDispatch({ type: "TRENDING" });
          }}
          to="filter"
        >
          <span>
            <img
              className="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_fire-outlined.png"
              alt=""
            />
          </span>
          Trending
        </Link>

        <hr />

        <Link to="history">
          <span>
            <img
              className="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_history-outlined.png"
              alt=""
            />
          </span>
          History
        </Link>
        <Link to="playlist">
          <span>
            <img
              className="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_play-square-outlined.png"
              alt=""
            />
          </span>
          Playlist
        </Link>
        <Link to="likedvideos">
          <span>
            <img
              className="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_like-outlined.png"
              alt=""
            />
          </span>
          Liked Videos
        </Link>
        <Link to="watchlater">
          <span>
            <img
              className="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_field-time-outlined.png"
              alt=""
            />
          </span>
          Watch Later
        </Link>
      </div>
    </sideBar>
  );
};

export default SideBar;
