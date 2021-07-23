import React, { Component } from "react";
import "../../styles/frontpages.css";
import { ConceptContext } from "../../context/concepts";
import { Link } from "react-router-dom";

export default class Categories_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
    };
  }

  static contextType = ConceptContext;

  render() {
    const { getCategory } = this.context;
    let name = this.state.name;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const category = getCategory(name);

    if (!category) {
      return (
        <div className="error">
          <h3> no such category could be found...</h3>
          <Link to="/categories" className="btn-primary">
            back to categories
          </Link>
        </div>
      );
    }

    const { category_name, subheader, image, description } = category;

    return (
      <div className="c-section background-grey">
        <div className="o-container">
          <h2 className="c-txt--sectiontitle c-mrg--bottom">{category_name}</h2>
          <h3 className="c-txt--sectiontitle c-mrg--bottom">{subheader}</h3>
          <div className="c-grid--1x">
            <ul className="no-scroll-grid">
              <img src={image} alt={category_name} />
              <p>{description}</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}