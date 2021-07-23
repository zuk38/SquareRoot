import React from "react";
import { Link } from "react-router-dom";
import "../styles/Customize.css"

export default function Concept({ concept }) {
  const { name, description, image } = concept;

  console.log(concept)

  return (
    <div className="imagebox">
      <img className="image" src={image} alt={name} />
      <span>
        <h1>{name.toUpperCase()}</h1>
        <p>{description}</p>
        <div className="hero-btns">
          <Link to={`/greenspaces/${name}`}>
            <button className="button is-light">LEARN MORE</button>
          </Link>

          <button className="button is-dark">
            ADD TO PROJECT
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </span>
    </div>
  );
}
