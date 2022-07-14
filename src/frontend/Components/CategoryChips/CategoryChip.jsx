import React from "react";
import { useVideos } from "../../Context/VideoContext";
import "./CategoryChip.css";
const CategoryChip = () => {
  const { categoriesData, filterDispatch } = useVideos();

  return (
    <>
      <div className="category-chips">
        {categoriesData.map(({ categoryName }) => (
          <div
            key={categoryName}
            onClick={() => {
              console.log("clicked", categoryName);
              filterDispatch({
                type: "CHIPS_FILTER",
                payload: categoryName,
              });
            }}
            className="chip"
          >
            {categoryName}
            <i className="close fas fa-times"></i>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryChip;
