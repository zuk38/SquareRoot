import React, { useEffect, useState, useRef } from "react";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import PartnerContainer from "../../components/PartnerContainer";
import Grid from "../../components/Grid_2x2";
import "../../styles/frontpages.css";
import Footer from "../../components/Footer";
import "../../styles/Home.css";
import logo from "../../images/logo-white-green.png";
import arrowDown from "../../icons/down-arrow.svg";
import arrowDownWhite from "../../icons/down-arrow-white.png";
import { useHistory } from "react-router-dom";
import { homeData } from "./HomeData";
import { useTranslation, Trans } from "react-i18next";

export default function Home(props) {
  const { t } = useTranslation();

  const executeScroll = (myRef) => {
    let element;
    if (!myRef) element = document.getElementById("first");
    else element = document.getElementById(myRef);
    element &&
      element.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
  };

  return (
    <div className="homepage">
      <div id="front-container" className="front-container disable-scrollbars">
        <section id="first">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="signup">
            <p>Ny hos SquareRoot?</p>
            <button>{t("demo")}</button>
            <p>{t("or")}</p>
            <p>{t("hero_account")}</p>
            <button>{t("beta")}</button>
          </div>
          <div className="d">
            <div className="hero-f-punchline">
              <span className="list-item">
                <h1>
                  <img src="../images/logo-asterisk-white.png" alt="asterisk" />
                  {t("hero_main1")}
                  <br />-<i>{t("hero_main2")}</i>
                </h1>
              </span>
            </div>
          </div>
          <div className="see-more">
            <button
              className="bounce zoom-on-hover"
              onClick={() => executeScroll(homeData[0].id)}
            >
              {t("see_more")}
              <img src={arrowDownWhite} />
            </button>
          </div>
        </section>

        {homeData.map((data) => (
          <HomeSection data={data} executeScroll={executeScroll} />
        ))}
      </div>
    </div>
  );
}

function HomeSection({ data, executeScroll }) {
  const { t } = useTranslation();
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <>
      <section id={data.id}>
        <div className="c-grid--2x2 padding-section top-container">
          <h1 className="grid-item0">
            <Trans i18nKey={data.i18nKey}>{data.headline}</Trans>
          </h1>

          <img className="grid-item2" src={data.img} />

          <div className="grid-item4 cat-descr">
            {data.descriptionItems.map((item, index) => (
              <div key={index}>
                {item.text} <br />
              </div>
            ))}

            <button
              className="action-btn"
              onClick={() => routeChange(data.path)}
            >
              {t("read_more")}
              <i className="fas fa-angle-double-right" />
            </button>
          </div>
          {data.nextId ? (
            <button
              className="btn-scroll-down zoom-on-hover"
              onClick={() => executeScroll(data.nextId)}
            >
              <i className="fas fa-angle-double-down" />
              <Trans i18nKey={data.nextI18nKey}>{data.nextName}</Trans>
            </button>
          ) : (
            <button
              className="btn-scroll-up zoom-on-hover"
              onClick={() => executeScroll()}
            >
              <i className="fas fa-angle-double-up" />
              Go Back
            </button>
          )}
        </div>
      </section>
    </>
  );
}
