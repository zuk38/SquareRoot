import React from "react";
import "../../styles/frontpages.css";
import { withConceptConsumer } from "../../context/concepts";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";

function Categories({ context }) {
  const history = useHistory();

  const redirectToCategory = (name) => {
    history.push(`/categories/${name.toLowerCase()}`);
  };

  let { loadCat, categories } = context;

  if (loadCat) return <Loading />;

  return (
    <div className="c-section background-grey">
      <div className="o-container">
        <h2 className="c-txt--sectiontitle c-mrg--bottom">Grøntområder</h2>

        <div className="c-grid--1x">
          <ul className="no-scroll-grid">
            {categories.map((category, index) => (
              <button
                key={index}
                className="item-portrait zoom-on-hover"
                onClick={() => redirectToCategory(category.category_name)}
              >
                <img
                  src={`../images/${category.category_name.toLowerCase()}.jpg`}
                  alt={category.category_name}
                />
                <p>{category.category_name}</p>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withConceptConsumer(Categories);
