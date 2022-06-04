import React from "react";
import { useVideos } from "../../Context/VideoContext";
import "./CategoryChip.css";
const CategoryChip = () => {
  const { categoriesData } = useVideos();

  return (
    <>
      <div className="category-chips">
        {categoriesData.map(({ categoryName }) => (
          <div class="chip">
            {categoryName}
            <i class="close fas fa-times"></i>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryChip;
