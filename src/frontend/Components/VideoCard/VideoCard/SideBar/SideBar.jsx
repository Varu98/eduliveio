import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <sideBar>
      <div class="sidebar__wrapper">
        <a href="#">
          <span>
            <img
              class="sidebar__icons"
              src="./assets/EduLive_icons/Variant8.png"
              alt=""
            />
          </span>
          Home
        </a>
        <a href="#">
          <span>
            <img
              class="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_fire-outlined.png"
              alt=""
            />
          </span>
          Trending
        </a>

        <hr />

        <a href="#">
          <span>
            <img
              class="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_history-outlined.png"
              alt=""
            />
          </span>
          History
        </a>
        <a href="#">
          <span>
            <img
              class="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_play-square-outlined.png"
              alt=""
            />
          </span>
          Playlist
        </a>
        <a href="#">
          <span>
            <img
              class="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_like-outlined.png"
              alt=""
            />
          </span>
          Liked Videos
        </a>
        <a href="#">
          <span>
            <img
              class="sidebar__icons"
              src="./assets/EduLive_icons/ant-design_field-time-outlined.png"
              alt=""
            />
          </span>
          Watch Later
        </a>
      </div>
    </sideBar>
  );
};

export default SideBar;
