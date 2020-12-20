import React from "react";

const SubCategoryChip = ({ name, color, onClick }) => (
  <div
    onClick={onClick}
    className={`${color} text-white font-lato px-2 py-1 text-2xs uppercase rounded-lg my-auto`}
  >
    {name}
  </div>
);

export default SubCategoryChip;
