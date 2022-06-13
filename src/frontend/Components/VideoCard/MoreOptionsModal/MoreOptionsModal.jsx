import React, { useState } from "react";
import "./MoreOptionsModal.css";

import { FiMoreVertical } from "react-icons/fi";
const MoreOptionsModal = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <FiMoreVertical
        onClick={() => setShowOptions((option) => !option)}
        className="option__vertical"
      />
      <div className={showOptions ? "moreOptions show" : "moreOptions"}>
        <ul>
          <li>
            <span className="option__icons-wrapper">
              <img
                class="option__icons"
                src="./assets/EduLive_icons/ant-design_field-time-outlined.png"
                alt=""
              />
            </span>
            <span>Save to watch later</span>
          </li>
          <li>
            <span className="option__icons-wrapper">
              <img
                class="option__icons"
                src="./assets/EduLive_icons/ant-design_play-square-outlined.png"
                alt=""
              />
            </span>
            <span>Add to Playlist</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MoreOptionsModal;
