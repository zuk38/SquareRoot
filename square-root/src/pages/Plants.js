import React, { useContext } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export const Plants = (props) => {
  return (
    <>
      <Hero hero="plantsHero">
        <Banner title="Our Plants">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </>
  );
};
