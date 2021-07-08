import React from "react";
import { Link } from "react-router-dom";

export default function Greenspace({ greenspace }) {
  const { name, description, image } = greenspace;

  console.log(greenspace)

  return (
    <div className="imagebox">
      <img className="image" src={image} alt="single greenspace" />
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
