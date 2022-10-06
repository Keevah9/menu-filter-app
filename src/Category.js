import React from 'react'
import { useGeneralContext } from './context';
const Category = ({ category, index }) => {
    const {filterItems} = useGeneralContext()
  return (
      <button
        type="button"
        className="filter-btn"
        key={index}
        onClick={() => filterItems(category)}
      >
        {category}
        
      </button>
  );
};

export default Category