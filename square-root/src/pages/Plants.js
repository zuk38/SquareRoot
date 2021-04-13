import React, { useContext } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { PlantContext } from "../context";

export const Plants = (props) => {
  const { plants } = useContext(PlantContext);

  if (!plants.length) {
    return <h3>No Plants Available</h3>;
  }

  return (
    <>
      <Hero hero="plantsHero">
        <Banner title="Our Plants">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <section className="plants">
        {plants.map(({ image: image, name, id }) => (
          <article key={id} className="plant">
            <div className="plant-image">
              <img src={image} alt={name} />
            </div>
            <Link to={`plants/:${name}`} className="btn book-link">
              details
            </Link>
          </article>
        ))}
      </section>
    </>
  );
};
