import React, { Component } from "react";
import "../../styles/frontpages.css";
import { ConceptContext } from "../../context/concepts";

export default class Categories_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
    };
  }

  static contextType = ConceptContext;

  render() {
    const getCategory = this.context;
    const category = getCategory(this.state.name);
    return (
      <div className="c-section background-grey">
        <div className="o-container">
          <h2 className="c-txt--sectiontitle c-mrg--bottom">
            {category.category_name}
          </h2>
          <h3 className="c-txt--sectiontitle c-mrg--bottom">
            {category.subheader}
          </h3>
          <div className="c-grid--1x">
            <ul className="no-scroll-grid">
              <img src={category.image} alt={category.category_name}/>
              <p>{category.description}</p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
