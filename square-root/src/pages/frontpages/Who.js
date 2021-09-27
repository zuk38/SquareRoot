import React from "react";
import "../../styles/frontpages.css";
import Grid from "../../components/Grid_2x2";
import FeaturedConcepts from "../../components/FeaturedConcepts";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Who() {
  const {t} = useTranslation();
    const executeScroll = (myRef) => {
        let element;
        if (!myRef) 
            element = document.getElementById("first");
         else 
            element = document.getElementById(myRef);
         element && element.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"});
    };

  return (
    <>
    
      <div className="c-section background-grey">

        <div className="o-container">
          <div className="c-hero">
          <h1 className="c-txt--hero">
            {
              t("who_h1")
              /*Who we are*/
            }
            </h1>
          <div className="short-border u-mrg--txt1"></div>
            <p className="main-punchline--p">
              {
                t("who_p1")
               
              }
            <br /><br />
            {
              t("who_p2")
            }
            
            <br /><br />
            {
              t("who_p3")
            }
              <br />
              
            </p>
          </div>
         
          {/* A WORD FROM FOUNDERS*/}
          <div className="c-section">
            <div className="c-container u-mrg--reset">
            <p className="c-txt--punchline">
              {
                t("who_h2")
                /*The Team*/
              }
              </p>
              <div className="c-grid--founders">
                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/jo-profil.jpeg"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>
                      {
                        t("jo_img1_desc1")
                        /*Jo Deketelaere */
                      }
                      </strong>
                    <br />
                    {
                      t("jo_img1_desc2")
                      /* Grunnlegger og CEO */
                    }
                    
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
          
                    <em>
                      {
                        t("jo_outlined")
                        /*Jo */
                      }
                      </em> 
                      {
                        t("jo_desc1")
                      }
                  </p>
                  <p>
                    {
                      t("jo_desc2")
                    }
                  </p>
                  <p>
                    {
                      t("jo_desc3")
                    }
                  </p>
                </div>

                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/michel-profile.jpeg"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>
                      {
                        t("michel_img2_desc1")
                        /*Michel Wolfstirn */
                      }
                      </strong>
                    <br />
                    {
                      t("michel_img2_desc2")
                      /*Founder og COO*/
                    }
                    
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
                    {
                      t("michel_desc1")
                    }
                    <em>
                      {
                        t("michel_outlined")
                        /* Michel */
                      }</em> 
                      {
                        t("michel_desc2")
                      }
                  </p>
                  <p>
                    {
                      t("michel_desc3")
                    }
                
                  </p>
                  <p>
                  {
                      t("michel_desc4")
                    }
                  </p>
                </div>
              </div>
              </div>
              </div>
<div className="c-section">
              <div className="c-grid--2x2">
                <div className="grid-item1">
                   {/* Karolina */}
      
            
           <img
                    className="c-img--portrait"
                    src="../images/missing-img.jpg"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>
                      {
                        t("karolina_img1_desc1")
                        /* Karolina M */
                      }
                      </strong>
                    <br />
                    {
                      t("karolina_img1_desc2")
                      /* Cloud Dev */
                    }
                    
                  </p>

                  <p>
                    {
                      t("karolina_desc1")
                    }
                    <em>&nbsp;
                      {
                        t("karolina_outlined")
                        /* Karolina */
                      }</em> &nbsp;
                      {
                        t("karolina_desc2")
                      }
                      <br />
                      <br />
                      {
                        t("karolina_desc3")
                      }
                  </p>

                </div>

                <div className="grid-item3">
                  {/* Gro */}
            
                  <img
                    className="c-img--portrait"
                    src="../images/gro-profile.jpeg"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>
                      {
                        t("gro_img1_desc1")
                        /* Gro Elisabeth Oleivsgard */
                      }
                      </strong>
                    <br />
                    {
                      t("gro_img1_desc2")
                      /* UX / UI and Frontend Developer */
                    }
                    
                  </p>

                  <p>
                    {
                      t("gro_desc1")
                    }
                    <em>&nbsp;
                      {
                        t("gro_outlined")
                        /* Gro */
                      }</em> &nbsp;
                      {
                        t("gro_desc2")
                      }
                      <br />
                      <br />
                      {
                        t("gro_desc3")
                      }
                  </p>
                </div>

                <div className="grid-item2">
                  {/* Kristian */}
                 

                  <img
                    className="u-mrg-img1"
                    src="../images/kristian-square.jpeg"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>
                      {
                        t("kristian_img1_desc1")
                        /* Kristian Sørum */
                      }
                      </strong>
                    <br />
                    {
                      t("kristian_img1_desc2")
                      /* Developer Trainee */
                    }
                    
                  </p>

                  <p>
                  {
                      t("kristian_desc1")
                    }
                  <em>&nbsp;
                      {
                        t("kristian_outlined")
                        /* Kristian */
                      }</em> &nbsp;
                      {
                        t("kristian_desc2")
                      }
                    
                  <br />
                  <br />

                  {
                        t("kristian_desc3")
                      }
                      
                  </p>
                </div>

                <div className="grid-item4">
                  {/* Sanne */}
                 
                  <img
                    className="u-mrg-img1"
                    src="../images/missing-img.jpg"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>
                      {
                        t("sanne_img1_desc1")
                        /* Sanne Edland*/
                      }
                      </strong>
                    <br />
                    {
                      t("sanne_img1_desc2")
                      /* Developer Trainee */
                    }
                    
                  </p>

                  <p className="c-txt-punchline--sm">
                    {
                      t("sanne_desc1")
                    }
                    <em>&nbsp;
                      {
                        t("sanne_outlined")
                        /* Sanne */
                      }</em> &nbsp;
                      {
                        t("sanne_desc2")
                      }
                  </p>

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
