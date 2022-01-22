import React from 'react';
import '../../styles/frontpages.css';
import { useNavigate } from 'react-router-dom';

function Categories() {
  let navigate = useNavigate();

  const redirectToCategory = (name) => {
    navigate(`/categories/${name.toLowerCase()}`);
  };

  return (
    <div className='c-section background-grey'>
      <div className='o-container'>
        <h2 className='c-txt--sectiontitle c-mrg--bottom'>Grøntområder</h2>

        <div className='c-grid--1x'>
          <ul className='no-scroll-grid'>
            {/*categories.map((category, index) => (
              <button
                key={index}
                className='item-portrait zoom-on-hover'
                onClick={() => redirectToCategory(category.category_name)}
              >
                <img
                  src={`../images/${category.category_name.toLowerCase()}.jpg`}
                  alt={category.category_name}
                />
                <p>{category.category_name}</p>
              </button>
            ))*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
