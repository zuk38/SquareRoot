import React from "react";
import "../../styles/frontpages.css";
import Grid from "../../components/Grid_2x2";
import FeaturedConcepts from "../../components/FeaturedConcepts";
import { Link } from "react-router-dom";

export default function Who() {
  const grid_values = [
    {
      img: "../images/planet-earth.png",
      subtitle: "Naturlige planter",
      paragraph: "Vi har høye standarder til plantene.",
    },
    {
      img: "../images/planet-earth.png",
      subtitle: "Naturlige planter",
      paragraph: "Vi har høye standarder til plantene.",
    },
    {
      img: "../images/planet-earth.png",
      subtitle: "Naturlige planter",
      paragraph: "Vi har høye standarder til plantene.",
    },
    {
      img: "../images/planet-earth.png",
      subtitle: "Naturlige planter",
      paragraph: "Vi har høye standarder til plantene.",
    },
  ];

  return (
    <>
    
      <div className="c-section background-grey">

        <div className="o-container">
          <div className="c-hero">
          <h1 className="c-txt--hero">Who we are</h1>
          <div className="short-border position-absolute u-mrg--txt1"></div>
            <p className="main-punchline--p">
            Looking for plants to create amazing and resilient urban green areas? 
            Unsure about compliance and availability of these plants? 
            SquareRoot is there to solve this for you! 
            <br /><br />
            Here you can choose a project type, 
            pick a look for your space, decide the functionality focus 
            and customize the plant list we suggest for you. 
            We make sure the plants fit your requirements and will be available. 
            
            <br /><br />
            Together we will green our cities!
              <br />
              
            </p>
          </div>
         
          {/* A WORD FROM FOUNDERS*/}
          <div className="c-section">
            <div className="c-container u-mrg--reset">
            <p className="c-txt--punchline">The Team</p>
              <div className="c-grid--founders">
                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/jo-profil.png"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>Jo Deketelaere</strong>
                    <br />
                    Grunnlegger og CEO
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
                    <em>Jo</em> started his career in international business
                    development for large energy companies focusing on climate
                    mitigation, environmental policies and investment in low
                    carbon emitting technologies.
                  </p>
                  <p>
                    He started his own company Greenbeat to develop a smart
                    blue-green roof combining automated management of urban
                    vegetation and intelligent control of water reservoirs. This
                    project called RainBrain has received funding from
                    OrganiCity and SynchroniCity, both under the H2020 umbrella.
                  </p>
                  <p>
                    He lives in Oslo, Norway with his wife and daughter, enjoys
                    hiking in local nature and is a happy member of the swimrun
                    community.
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/michel-profile.jpeg"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>Michel Wolfstirn</strong>
                    <br />
                    Grunnlegger og COO
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
                    A lover of nature and the outdoors, <em>Michel</em> is passionate
                    about the environment and contributing to solving climate
                    change.
                  </p>
                  <p>
                    He co-founded BiomimicryNorway, an NGO dedicated to
                    educating people and companies about sustainable innovation
                    inspired by nature. He has spent a great deal of energy
                    helping various startups and initiatives in the past years
                    using his many skills ranging from design to business
                    modelling for Circular Economy.
                  </p>
                  <p>
                    Amongst other things he has contributed building for Gruten
                    the first norwegian urban farm growing mushrooms on coffee
                    grounds. He is also involved with Pådriv on projects related
                    to sustainable urban development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {/* WHY US 
      <div className="c-section background-grey">
        <div className="o-container ">
          <p className="c-txt-punchline--sm">
            <strong>Hvorfor oss? </strong>
            Vi har knyttet alle aktører til samme plattform slik at vi sammen
            kan gjøre det enklere å velge grønt.
            <br />
            <br />
            Vi baserer databasen vår på forskningsbaserte resultater for å finne
            de beste plantene for riktig sted. Dette knyttes til lovgivninger,
            miljøsertifiseringer og økonomiske insentiver, og sørger dermed for
            at du velger et motstandsyktig, bærekraftig og økonomisk
            grøntområde. Vi samarbeider med planteskoler slik at forsyningen av
            planter holder tritt med etterspørselen, slik at din bedrift mottar
            bestillingen i tide med de rette plantene.
            <br />
            <br />
            Vi forstår at slike prosesser kan innebære endringer grunnet ulike
            faktorer. For at denne prosessen skal forbli sømløs er det enkelt å
            kontinuerlige endre og oppdatere prosjektet ditt.
          </p>
        </div>
      </div>
      */}
      {/* 'ROOT PROJECTS 
      <div className="c-section">
        <div className="o-container">
          <h2 className="c-txt--sectiontitle">'Root-prosjekter</h2>
          <p className="c-txt--punchline">Sammen utvikler vi grønne byrom.</p>
          <FeaturedConcepts />
        </div>
      </div>
      */}
      {/* CONTACT FOR PROJECT
      <div className="c-section c-section--cta background-grey">
        <div className="o-container">
          <h2 className="c-txt-sectiontitle--sm u-txt--center">
            Vi vil gjerne være en del av landskapsplanleggingen din!
          </h2>
          <h3 className="c-txt-punchline--sm u-txt--center">
            Ta kontakt og fortell oss hva du ønsker.
          </h3>
          <Link
            to={{ pathname: "/projects", state: { modalOpen: true } }}
            className="o-btn c-mrg--top/3"
          >
            Start prosjekt
          </Link>
        </div>
      </div>
      {/*

      <div class="float-container">
        <div class="float-child">
          <div className="why">
            <h1 className="why-h1">HVORFOR SquareRoot?</h1>
            <p className="why-desc">
              Well designed urban green spaces are a powerful climate
              adaptation. They improve life quality, minimise risk of floods,
              improve water and air quality, regulate temperature, support
              biodiversity and increase the valuation of nearby property.
            </p>
          </div>
        </div>
        <div class="float-child">
          <img src="../images/flowers-unsplash.jpeg" className="why-image" alt="?"></img>
        </div>
      </div>


            <div className="why-reasons">
                <h2 className="five-reasons">5 good reasons to choose green spaces</h2>
                <h3 className="reasons">1. Implementation</h3>
                <p>
                    We are doing this by making the implementation of urban green spaces
                              outside, inside and on top of buildings easy, cheaper, and available
                              everywhere.
                </p>
                <h3 className="reasons">3. Implementation</h3>
                <p>
                    We are doing this by making the implementation of urban green spaces
                              outside, inside and on top of buildings easy, cheaper, and available
                              everywhere.
                </p>
                <h3 className="reasons">4. Address</h3>
                <p>
                    By simply entering their address on our platform, we make tailored
                              offers for the right plant for the right spot and concepts such as
                              roof gardens, rain beds to manage heavy rainfall and plants to
                              increase biodiversity.
                </p>
                <h3 className="reasons">5. Implementation</h3>
                <p>
                    We are doing this by making the implementation of urban green spaces
                              outside, inside and on top of buildings easy, cheaper, and available
                              everywhere.
                </p>
            </div>
            <h2 className="why-inspo">Inspirational projects</h2>
            <p className="why-inspo-desc">
                We are doing this by making the implementation of urban green spaces
                        outside, inside and on top of buildings easy, cheaper, and available
                        everywhere.
            </p>
            <div className="inspo-images">
                <div className="inspo-image1">
                    <img src="../images/plantbed.png" alt="Project 1"></img>
                    <h className="inspo-h">Project 1</h>
                </div>
                <div className="inspo-image1">
                    <img src="../images/plantbed.png" alt="Project 2"></img>
                    <h className="inspo-h">Project 2</h>
                </div>
            </div>
             */}{" "}
    </>
  );
}
