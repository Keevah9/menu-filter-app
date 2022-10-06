import React from "react";
import Category from "./Category";
import { useGeneralContext } from "./context";
const Categories = () => {
    const {categories} = useGeneralContext()
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <Category category={category}/>
        );
      })}
    </div>
  );
};

export default Categories;
