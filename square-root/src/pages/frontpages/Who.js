import React from "react";
import "../../styles/frontpages.css";
import Grid from "../../components/Grid_2x2";
import FeaturedConcepts from "../../components/FeaturedConcepts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Who() {
  const { t } = useTranslation();
  const grid_values = [
    {
      img: "../images/planet-earth.png",
      subtitle: t("who_page.grid_values.1.subtitle"),
      paragraph: t("who_page.grid_values.1.paragraph"),
    },
    {
      img: "../images/planet-earth.png",
      subtitle: t("who_page.grid_values.2.subtitle"),
      paragraph: t("who_page.grid_values.2.paragraph"),
    },
    {
      img: "../images/planet-earth.png",
      subtitle: t("who_page.grid_values.3.subtitle"),
      paragraph: t("who_page.grid_values.3.paragraph"),
    },
    {
      img: "../images/planet-earth.png",
      subtitle: t("who_page.grid_values.4.subtitle"),
      paragraph: t("who_page.grid_values.4.paragraph"),
    },
  ];

  return (
    <>
      <div className="c-section background-grey">
        <div className="o-container">
          <div className="c-hero">
            <h1 className="c-txt--hero">{t("who_page.title")}</h1>
            <p className="c-txt--hero-p">
              {t("who_page.d1")}
              <br />
              <br />
              {t("who_page.d2")}
            </p>
          </div>
          <div className="c-container">
            <div className="c-img">
              <img src="../images/oslo-flowers.png" alt="flowers" />
            </div>
          </div>
          {/* A WORD FROM FOUNDERS*/}
          <div className="c-section">
            <div className="c-container u-mrg--reset">
              <h2 className="c-txt--sectiontitle u-mrg--x0">
                {t("who_page.founders.history")}
              </h2>
              <p className="c-txt--punchline">{t("who_page.founders.p1")}</p>
              <div className="c-grid--founders">
                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/jo-profil.png"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>Jo Deketelaere</strong>
                    <br />
                    {t("who_page.founders.ceo")}
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
                    {t("who_page.founders.jo_1")}
                  </p>
                  <p>{t("who_page.founders.jo_2")}</p>
                  <p>{t("who_page.founders.jo_3")}</p>
                </div>
                <div className="u-mrg--reset">
                  <img
                    className="u-mrg-img1"
                    src="../images/michel-profil.png"
                  ></img>
                  <p className="u-mrg-txt1">
                    <strong>Michel Wolfstirn</strong>
                    <br />
                    <p>{t("who_page.founders.coo")}</p>
                  </p>
                </div>
                <div className="u-mrg--reset">
                  <p className="c-txt-punchline--sm">
                    {t("who_page.founders.michel_1")}
                  </p>
                  <p>{t("who_page.founders.michel_2")}</p>
                  <p>{t("who_page.founders.michel_3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-section">
        <div className="o-container">
          <Grid
            title="Våre verdier og tilnærminger"
            grid_values={grid_values}
          />
        </div>
      </div>
      {/* WHY US */}
      <div className="c-section background-grey">
        <div className="o-container ">
          <p className="c-txt-punchline--sm">
            <strong>{t("who_page.title")}? </strong>
            {t("who_page.why_us.d1")}
            <br />
            <br />
            {t("who_page.why_us.d2")}
            <br />
            <br />
            {t("who_page.why_us.d3")}
          </p>
        </div>
      </div>
      {/* 'ROOT PROJECTS */}
      <div className="c-section">
        <div className="o-container">
          <h2 className="c-txt--sectiontitle">
            {t("who_page.root_projects.title")}
          </h2>
          <p className="c-txt--punchline">{t("who_page.root_projects.d")}</p>
          <FeaturedConcepts />
        </div>
      </div>
      {/* CONTACT FOR PROJECT*/}
      <div className="c-section c-section--cta background-grey">
        <div className="o-container">
          <h2 className="c-txt-sectiontitle--sm u-txt--center">
            {t("who_page.project_contact.title")}
          </h2>
          <h3 className="c-txt-punchline--sm u-txt--center">
            {t("who_page.project_contact.subtitle")}
          </h3>
          <Link
            to={{ pathname: "/projects", state: { modalOpen: true } }}
            className="o-btn c-mrg--top/3"
          >
            {t("start")}
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
             */}
    </>
  );
}
