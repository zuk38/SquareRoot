import React from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import PartnerContainer from "../../components/PartnerContainer";
import Grid from "../../components/Grid_2x2"
import "../../styles/frontpages.css";
import "../../styles/Home.css";
import FeaturedConcepts from "../../components/FeaturedConcepts";

export default function Home(props) {
  const handleStart = () => {
    props.history.push({ pathname: "/projects", state: { modalOpen: true } });
  };

  const grid_values = [
    {
        img: "../images/planet-earth.png",
        subtitle: "Lovgivning",
        paragraph: "Urbane grøntområder kan brukes som et verktøy for å oppfylle krav i lovgivningen. For eksempel kan grønne tak og regnhager bli brukt for overvannshåndtering."
    }, {
        img: "../images/planet-earth.png",
        subtitle: "Miljøsertifisering",
        paragraph: "Urbane grøntområder kan brukes som et verktøy for å oppnå miljøsertifiseringer. For eksempel kan grønne tak med innfødte arter gi høy BREEAM-score, eller innendørse planter for å oppnå WELL-standarden."
    }, {
        img: "../images/planet-earth.png",
        subtitle: "Økonomiske insentiver",
        paragraph: "Urbane grøntområder kan øke eiendomsverdien, samt som et verktøy for å øke utnyttelsen av en tomt. Les mer om dette <a href=https://dibk.no/regelverk/byggteknisk-forskrift-tek17/5/5-6/>her</a>"
    }, {
        img: "../images/planet-earth.png",
        subtitle: "Strategier",
        paragraph: "Strategi i planteutvikling (MER TEKST)"
    },
];

  return (
    <div className="smooth-scroll">
      <Hero>
        <Banner img="../images/logo-white.png">
          <img src="../images/logo-asterisk-white.png" />

          <h2>
            Bestill plantene dine hos oss - Vi gjør det enklere å velge bærekraftig byutvikling. Planlegg,
            design og bestill grøntarealer både ute og inne.{" "}
          </h2>

          <p class="buttons">
            <button class="button is-light front-btn-1" onClick={handleStart}>START PROSJEKT </button>
            <button class="button is-dark front-btn-2">LES MER</button>
          </p>
        </Banner>
      </Hero>

      <Grid title="Trender og insentiver for urbane grøntområder"
                grid_values={grid_values}/>
      <FeaturedConcepts />
      <PartnerContainer />
    </div>
  );
}
