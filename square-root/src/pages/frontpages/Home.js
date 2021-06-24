import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import FeaturedGreenspaces from "../../components/FeaturedGreenspaces";
import Partner from "../../components/Partner";

export default function Home(props) {
  const handleStart = () => {
    props.history.push({ pathname: "/projects", state: { modalOpen: true } });
  };
  return (
    <>
      <Hero>
        <Banner img="../images/logo-white.png">
          <img src="../images/logo-asterisk-white.png" />

          <h2>
            Vi gjør det enklere å velge bærekraftig byutvikling. Planlegg,
            design og bestill grøntarealer både ute og inne.{" "}
          </h2>

          <p class="buttons">
            <button class="button is-light front-btn-1" onClick={handleStart}>START PROSJEKT </button>
            <button class="button is-dark front-btn-2">LES MER</button>
          </p>
        </Banner>
      </Hero>
      {/*<FeaturedGreenspaces />*/}
      <Partner />
    </>
  );
}
