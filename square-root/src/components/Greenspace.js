import React from "react";
import { Link } from "react-router-dom";

export default function Greenspace({ greenspace }) {
  const { name, description, image } = greenspace;

  return (
    <div className="imagebox">
      <img classname="image" src={image} alt="single greenspace" />
      <span>
        <h1>{name.toUpperCase()}</h1>
        <p>{description}</p>
        <div className="hero-btns">
          <Link to={`/greenspaces/${name}`}>
            <button class="button is-light">LEARN MORE</button>
          </Link>

          <button class="button is-dark">
            ADD TO PROJECT
            <i class="fas fa-chevron-right" />
          </button>
        </div>
      </span>
    </div>
  );
}
