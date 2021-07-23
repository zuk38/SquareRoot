import React from "react";
import "../styles/frontpages.css";
import { useHistory } from "react-router-dom";

export default function ScrollGrid({ title, categories }) {
  const history = useHistory();
  const redirectToGreenspace = (name) => {
    history.push(`/categories${name.toLowerCase()}`);
  };

  return (
    <div>
      <div className="c-section background-grey">
        <div className="o-container">
          <h2 className="c-txt--sectiontitle c-mrg--bottom">{title}</h2>

          <div className="c-grid--1x">
            <ul className="no-scroll-grid">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="item-portrait zoom-on-hover"
                  onClick={() => redirectToGreenspace(category.category_name)}
                >
                  <img src={category.image} />
                  <p>{category.category_name}</p>
                </button>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
