import React from 'react';

const Categories = ({categories, filterItems}) => {
  return <div className='btn-container'>
   {categories.map((data, index) => { return <button className='filter-btn'
    key={index} onClick={() => filterItems(data)}>{data}</button>})}

  </div>;
};

export default Categories;
