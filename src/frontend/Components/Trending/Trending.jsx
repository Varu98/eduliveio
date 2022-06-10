import React from "react";
import CategoryChip from "../CategoryChips/CategoryChip";
import VideoCard from "../VideoCard/VideoCard";

const Trending = () => {
  return (
    <>
      <CategoryChip />
      <div className="grid-autofit">
        <VideoCard />
      </div>
    </>
  );
};

export default Trending;
